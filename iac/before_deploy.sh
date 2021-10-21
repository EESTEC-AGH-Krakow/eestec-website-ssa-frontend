#!/bin/bash

printf "start decrypting file ...\n"
openssl aes-256-cbc -K $encrypted_21ceb9cca1cf_key -iv $encrypted_21ceb9cca1cf_iv -in ./iac/deploy_key.enc -out ./.deploy_key -d

printf "\nstart the ssh-agent to run ssh commands ...\n"
eval "$(ssh-agent -s)"

printf "\nchange permissions on decrypted file to avoid warnings ...\n"
chmod 600 ./.deploy_key

printf "\navoid Travis asking if we want to \"check\" the identity of target host (VPS) ...\n"
echo -e "Host $SERVER_ADDRESS\n\tStrictHostKeyChecking no\n" >> ~/.ssh/config

printf "\nadd the decrpyted file as preferred ssh RSA key ...\n"
ssh-add ./.deploy_key

printf "\nrun the pwd command on the deployment server using the decrypted file as \"identity\" file (RSA Key) ...\n"
ssh -i ./.deploy_key "$USERNAME"@"$SERVER_ADDRESS" pwd

printf "\nconnectivity test has been completed successfully!"
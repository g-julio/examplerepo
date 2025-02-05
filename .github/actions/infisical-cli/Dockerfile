FROM ubuntu:latest

RUN curl -1sLf 'https://dl.cloudsmith.io/public/infisical/infisical-cli/setup.deb.sh' | -E bash \
    apt-get update && apt-get install -y infisical

# Setting the entrypoint to be a no-op, since we’re just preparing the environment
ENTRYPOINT ["echo", "Infisical CLI installed"]

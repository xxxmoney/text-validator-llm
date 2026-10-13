
# Text Validator LLM

Simple API to validate if text satisfies certain criteria (rules)
Built with NestJS (TypeScript)

## Getting started
- Get [Docker](https://www.docker.com/products/docker-desktop/)
- Clone this repo `git clone https://github.com/xxxmoney/text-validator-llm`
- Start with `docker compose up -d`
- See endpoints at `http://localhost:667/docs` (Swagger UI)

## Local development
- Can use docker command
  - `docker compose -f docker-compose.yaml -f docker-compose.dev.yaml up --build -d`
- Or npm command
  - `npm run docker-up:dev`
- Starts on `http://localhost:667` by default

## NestJS cli
- Works like Angular CLI - use for adding modules, controllers, services, etc
- Typical sequence:
    - `nest g module <module-name>` - generates a new module
    - `nest g controller <controller-name>` - generates a new controller
    - `nest g service <service-name>` - generates a new service

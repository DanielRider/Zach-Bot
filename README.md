# ZACHBOT

## How to use

pull code. Go to Discord_Integration/

```bash
npm start
```

## What is ZachBot

This will be a locally ran LLM finetuned on Zach's discord messages. That will then be able to respond to messages, periodically send a message, and respond to slash commands. The purpose is to BUILD SLOP, and maybe learn something along the way.

## Structure

All JavaScript should be in the Discord_Integration/ directory. That will be the 'main'

Generally i'm going to use the following structure generated by chatgpt

```plaintext
top-level-directory/
|-- Discord-Integration/             # Handles Discord bot integration
|   |-- commands/                    # Specific bot commands and handlers
|   |-- events/                      # Event listeners for Discord (on_message, etc.)
|   |-- config.json                  # Discord bot configuration (tokens, prefixes, etc.)
|   |-- app.js                       # Main bot entry point
|   |-- views/                       # Optional (if your bot has web-based output for stats)
|       |-- index.html               # Web dashboard (if applicable)
|
|-- ZachBotGeneration/               # Model training and serving
|   |-- Training/                    # Contains all model training processes
|   |   |-- Data_Gathering/          # Data collection for fine-tuning
|   |   |   |-- raw_data/            # Raw datasets or scraped data
|   |   |   |-- cleaned_data/        # Cleaned and preprocessed data
|   |   |   |-- scripts/             # Scripts for data scraping and cleaning
|   |   |-- FineTuningAndQuantization/
|   |       |-- configs/             # Training and quantization configuration files
|   |       |-- logs/                # Logs and checkpoints from fine-tuning
|   |       |-- scripts/             # Scripts for fine-tuning and quantization
|   |       |-- models/              # Directory to store trained and quantized models
|   |-- Serving/                     # API for serving the fine-tuned model
|       |-- api/                     # API implementation (e.g., FastAPI, Flask)
|       |-- docker/                  # Docker configuration for containerization
|       |-- tests/                   # Unit tests for the serving API
|-- configs/                         # Centralized configuration files
|   |-- training.yaml                # Hyperparameters and training settings
|   |-- discord_config.json          # Discord bot configuration
|   |-- api_config.yaml              # Serving API configuration
|
|-- scripts/                         # Helper scripts for the overall project
|   |-- deploy.sh                    # Script for deployment (e.g., Docker Compose)
|   |-- setup_env.sh                 # Script to set up the project environment
|   |-- test_all.sh                  # Script to run all tests
|
|-- .env                             # Environment variables (add to .gitignore)
|-- README.md                        # Project overview and instructions
|-- requirements.txt                 # Python dependencies
|-- package.json                     # Node.js dependencies (for Discord bot)
|-- LICENSE                          # Project license
```

## deploying commands

do:

```bash
node deploy-commands.js
```

## adding bot to server

Only has slash command capability

<https://discord.com/oauth2/authorize?client_id=1321991828324487271&integration_type=0&scope=applications.commands>

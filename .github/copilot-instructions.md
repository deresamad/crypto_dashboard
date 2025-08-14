# Crypto Dashboard

Always reference these instructions first and fallback to search or bash commands only when you encounter unexpected information that does not match the info here.

## Current Repository State
This repository is currently minimal, containing only a README.md file. The codebase is not yet developed but is intended to be a cryptocurrency dashboard application.

## Working Effectively

### Repository Structure
The current repository structure is:
```
.
├── .git/           # Git repository data
├── .github/        # GitHub configurations (created for these instructions)
│   └── copilot-instructions.md
└── README.md       # Basic project description
```

### When Development Begins
Since this is currently an empty repository, development has not started yet. When code is added, expect typical patterns for crypto dashboard applications:

#### Likely Technology Stack
Based on common crypto dashboard patterns, this project will likely use:
- **Frontend**: React/Vue.js/Angular with TypeScript for the dashboard UI
- **Backend**: Node.js/Python/Go for API services
- **Database**: PostgreSQL/MongoDB for data storage
- **Real-time Data**: WebSocket connections for live crypto prices
- **External APIs**: Integration with crypto exchanges (Binance, Coinbase, etc.)

#### Future Build Commands (when applicable)
Once development begins, validate these common patterns:

**For Node.js/React Stack:**
- `npm install` - Install dependencies
- `npm run dev` - Start development server
- `npm run build` - Build for production (NEVER CANCEL: may take 5-10 minutes, set timeout to 15+ minutes)
- `npm run test` - Run tests (NEVER CANCEL: may take 2-5 minutes, set timeout to 10+ minutes)
- `npm run lint` - Check code style

**For Python Stack:**
- `pip install -r requirements.txt` - Install dependencies
- `python -m pytest` - Run tests (NEVER CANCEL: set timeout to 10+ minutes)
- `python app.py` or `uvicorn main:app --reload` - Start development server
- `flake8` or `black .` - Linting and formatting

**For Containerized Setup:**
- `docker-compose up` - Start all services (NEVER CANCEL: first run may take 10-15 minutes, set timeout to 20+ minutes)
- `docker-compose build` - Rebuild containers (NEVER CANCEL: may take 15-30 minutes, set timeout to 45+ minutes)

### Validation Steps (Future)
When code is present, always validate changes by:
1. Running the build process completely
2. Starting the application locally
3. Testing these critical crypto dashboard scenarios:
   - View real-time cryptocurrency prices
   - Navigate between different cryptocurrency pairs
   - Test portfolio tracking functionality (if present)
   - Verify API rate limiting handling
   - Check responsive design on different screen sizes
4. Run all tests and linting before committing

### Development Workflow
When working on this crypto dashboard:
1. Always pull latest changes: `git pull origin main`
2. Create feature branch: `git checkout -b feature/your-feature-name`
3. Make minimal, focused changes
4. Test functionality thoroughly (see validation steps above)
5. Run linting and formatting tools
6. Commit with descriptive messages
7. Push and create pull request

## Critical Reminders
- **NEVER CANCEL long-running builds or tests** - Crypto applications often have complex dependencies
- **ALWAYS test with live API data** when available - crypto data can be volatile
- **BE CAUTIOUS with API keys** - never commit secrets to the repository
- **VALIDATE rate limiting** - crypto APIs have strict rate limits
- **TEST responsive design** - crypto dashboards are often used on mobile devices

## Common Issues to Watch For
When development begins, be aware of these common crypto dashboard pitfalls:
- API rate limiting from crypto exchanges
- WebSocket connection handling for real-time data
- Large bundle sizes from charting libraries
- Time zone handling for trading data
- Precision issues with cryptocurrency decimal values
- CORS issues when connecting to exchange APIs

## Repository Commands Reference
Current available commands:
```bash
# View repository structure
ls -la

# Check git status
git status

# View README
cat README.md
```

## Next Steps for Development
When you begin adding code to this repository:
1. Choose your technology stack (Node.js/React, Python/Django, etc.)
2. Add package.json, requirements.txt, or equivalent dependency files
3. Set up basic project structure with src/, public/, tests/ directories
4. Configure linting, formatting, and testing tools
5. Add .gitignore file appropriate for your stack
6. Update these instructions with actual build and test commands
7. Set up CI/CD workflows in .github/workflows/

## Important Notes
- This repository currently has no executable code
- No dependencies or build system present
- Instructions will need updating once development begins
- Always validate any new build commands before adding them to these instructions

Remember: These instructions are written for the current minimal state of the repository. Update them as the codebase develops with actual validated commands and workflows.
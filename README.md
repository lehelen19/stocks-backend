# PortfolioPal Backend
This repository contains the backend code for PortfolioPal, a web application for managing stock portfolios.

## Technologies and JS libraries
- Node.js
- MongoDB
- Alpha Vantage API
- bcrypt
- jsonwebtoken
- cors
- axios
- API Endpoints
- show(req, res)


### Description:
Retrieves stock data for a given symbol using the Alpha Vantage API.

### create(req, res)
Description:
Creates a new user in the database.

### createJWT(user)
Description:
Creates a JSON Web Token (JWT) for user authentication.

### login(req, res)
Description:
Logs in a user by validating the provided credentials and returning a JWT.

### checkToken(req, res)
Description:
Verifies the authenticity of a JWT.

### index(req, res)
Description:
Retrieves all watchlists associated with the authenticated user.

### show(req, res)
Description:
Retrieves a specific watchlist by ID.

### create(req, res)
Description:
Creates a new watchlist for the authenticated user.

### update(req, res)
Description:
Updates the name of a watchlist.

### deleteWatchlist(req, res)
Description:
Deletes a watchlist by ID.

### addStock(req, res)
Description:
Adds a stock to a watchlist.

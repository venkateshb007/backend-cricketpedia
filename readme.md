URL Shortener
This is a simple URL shortener application built using Node.js, Express, and MongoDB.

Installation
1. Clone the repository: git clone https://github.com/your-username/url-shortener.git

2. Navigate to the project directory: cd url-shortener

3. Install dependencies: npm install

4. Create a .env file with the following contents:
PORT=3000
MONGO_URI=<your-mongodb-uri>
BASE_URL=<your-base-url>

5. Start the server: npm start

Usage
To shorten a URL, make a GET request to http://localhost:3000/shorten?url=<your-url>. The response will be a JSON object with the shortened URL.

Example: 

GET http://localhost:3000/shorten?url=https://www.google.com

Response:

{
    "original_url": "https://www.google.com",
    "short_url": "http://localhost:3000/eMp9W8"
}



import express, { Request, Response } from "express";

const app = express();
const PORT = process.env.PORT || 3000;

// Parse form data
app.use(express.urlencoded({ extended: true }));

// Show form
app.get("/", (req: Request, res: Response) => {
  res.send(`
    <html>
      <body>
        <form method="POST" action="/submit">
          <label>Enter your name:</label><br/>
          <input type="text" name="name" required />
          <br/><br/>
          <button type="submit">Submit</button>
        </form>
      </body>
    </html>
  `);
});

// Handle form submission
app.post("/submit", (req: Request, res: Response) => {
  const name = req.body.name || "Guest";
  res.send(`Hello ${name}  `);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

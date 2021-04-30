const fs = require("fs");

const about = fs.readFileSync('Lab_01_180042145/contents/HTML/about.html',"utf-8")
const blog = fs.readFileSync('Lab_01_180042145/contents/HTML/blog.html',"utf-8")
const contact = fs.readFileSync('Lab_01_180042145/contents/HTML/contact.html',"utf-8")
const index = fs.readFileSync('Lab_01_180042145/contents/HTML/index.html',"utf-8")
const pricing = fs.readFileSync('Lab_01_180042145/contents/HTML/pricing.html',"utf-8")
const service = fs.readFileSync('Lab_01_180042145/contents/HTML/services.html',"utf-8")
const work = fs.readFileSync('Lab_01_180042145/contents/HTML/work.html',"utf-8")

const data = {
    'about':about,
    'blog':blog,
    'contact': contact,
    'index': index,
    'pricing': pricing,
    'service': service,
    'work': work
}

module.exports = {data}
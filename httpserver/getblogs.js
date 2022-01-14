const Blogs = require('../controller/blog');
console.log(Blogs)
const routes = function routes(req,res) {
    if (req.url == '/getBlogs') {
         res.writeHead(200, "Content-Type:text/plain")
         res.write(JSON.stringify(Blogs))
        console.log(Blogs)
        res.end();
    }
    else {
        res.end("not found")
    }
   
 }
module.exports=routes
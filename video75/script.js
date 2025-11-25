console.log("Aastha is a hacker")
console.log("hacking in progress...")

setTimeout(()=>{
    console.log("hacking completed")
}, 2000);
setTimeout(()=>{
    console.log("hacking completed soon...")
}, 0);
console.log("Enjoy your hacked console");


const callback = (arg)=>{
    console.log(arg)
}
const loadscript = (src) => {
    let sc = document.createElement("script");
    sc.src = src;
    sc.onload = callback("Aastha");
    document.head.append(sc);
}

loadscript("https:cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback);
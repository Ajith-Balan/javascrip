
async function add() {
    try {
    const res=await    fetch("https://jsonplaceholder.typicode.com/posts")
    const data=await res.json()
           
            let str =""; 
            let str1="";
            let str2="";
            data.map((post) => { 
                str += `<li class="border" style="height: 100px;">${post.body}</li>`
                str1 += `<li class="border" style="height: 100px;">${post.id}</li>`
                str2 += `<li class="border" style="height: 100px;">${post.title}</li>`


            });
            document.getElementById('list').innerHTML = str
            document.getElementById('lis').innerHTML = str1
            document.getElementById('li').innerHTML = str2

     
    } catch (error) {
        document.write(error);
    }
}
add()
//javascript or ES5 way

var str1="iam Sting1";
var str2="iam Sting2";
var str3="iam Sting3";

document.write("javascript or ES5 way-----"+str1+"------"+str2+"--------"+str3);

//EcmaScript (ES6) way
document.write(`<h1>EcmaScript (ES6) way</h1>----${str1}----${str2}----${str3}`);


//EcmaScript (ES6) way we can write multiple lines
document.write(`
<section>
<h1>EcmaScript</h1>
<p>The main aim of my project is to reduce the electricity consumption and bring the transparency
 between electricity providers and consumers. It reduces the man power for billing purposes. 
 The consumption  is continuously monitored by energy meter and at the same time Internet also. 
 </p>
 <h1>Login</h1>
 <p>
 <div class="loginCard col-md-4 mx-auto card my-4 flex">
       <div class="card-body">
        <form action="/auth/login" method="POST" novalidate>
        <div class="form-group"><label for="Email">Email</label>
           <input type="text" name="email" class="form-control" id="email">
        </div>
        <div class="form-group"><label for="password">password</label>
           <input type="password" name="password" class="form-control" id="password">
        </div>
        <div class="form-group">
            <button class="btn btn-success btn-block my-3">Login</button>
        </div>
        </hr>
        <p>by creating an Account you agree to Myntra's condidates are Use and privacy Notice</p>
        <p>Don't  have an Account
        <a href="/auth/register">Register</a>
        </p>
        </form>
       </div>
</div>
 </p>
</section>`);
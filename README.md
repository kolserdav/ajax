**Ajax request module**  

`Installation`  

~$ `npm i ajaxsim`  
or  
~$ `npm i https://github.com/kolserdav/ajax`  

`Using`  

Javascript:   
```javascript
import ajaxS from 'ajaxsim';

ajaxS(url, //[require] custom url
 request = "test=ajaxSim works", //[optional] default : "test=ajaxS works" ...
  responseBack = function(r){console.log(r);},
   method = 'POST')
```  
Server. For example PHP:  
```php
echo $_REQUEST['test'];
```

It works...
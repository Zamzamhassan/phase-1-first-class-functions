function receivesAFunction(callback) 
{
  callback();
}
  function returnsANamedFunction(name)
  {
      return function Holiday()
  { 
  return Diwali;
  }
} 


function returnsAnAnonymousFunction()
{
    return function(){
        return `Monday.`;
    }
}
function printName()
{
    console.log("Sebastian")
}

function executeNtime(fn,n = 20)
{
    for(let i = 0; i < n; i++)
    {
        fn()
    }
}

executeNtime(printName)
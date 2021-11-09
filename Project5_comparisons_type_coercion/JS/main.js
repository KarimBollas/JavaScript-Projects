function Coercion()            // Define function Coercion
{
    var n=100;
    document.write("500[text] + 100[number] due the coercion: ") ;  //Coercion example
    document.write("500" + n ) ;
    document.write("<br> 500 is a " ) ;
    document.write(typeof "500");           //Type of string
    document.write(" and 100 is a " ) ;
    document.write(typeof n);               //Type of number
    
    document.write("<br> 0/0="+ 0/0);                           //0/0 qhat is?
    document.write("<br> is [Text] a NAN? " + isNaN('Text'));           // isNaN operator
    document.write("<br> is [007] a NAN? " + isNaN('007'));
    document.write("<br> 2E310 is " + 2E310);                   // Infinite by overload the range of float
    document.write("<br> -3E310 is "+ (-2E310));                // Infinite by overload the range of float
    
    // Logical operators < > == === ! || &&
    
    document.write("<br> 10>2: ");
    document.write(10>2);
    document.write("<br> 10<2: ");
    document.write(10<2);
    document.write("<br> Console 3 * 7 ");
    console.log(3 * 7);
    document.write("<br> False to console");
    console.log(!true);
    document.write("<br> False with (0/0)==(0/0) ");
    document.write((0/0)==(0/0));
    document.write("<br> True with 1==1 ");
    document.write(1==1);
    document.write("<br> \"007\"=== \"007\" ");
    document.write("007"==="007");
    document.write("<br> \"007\"=== 008 ");
    document.write("007"===008);
    document.write("<br> \"007\"=== 007 ");
    document.write("007"===007);
    document.write("<br> 1>0 && 1<2: " + (1>0 && 1<2) );
    document.write("<br> 1>1 && 1<2: " + (1>1 && 1<2) );
    document.write("<br> 1>1 || 1<2: " + (1>1 || 1<2) );
    document.write("<br> 1>1 || 1<0: " + (1>1 || 1<0) );
    document.write("<br> 1>1 || 1<2: " + (1>1 || 1<2) );
    document.write("True by Not " + !false);
    document.write("False by Not " + !true);
}


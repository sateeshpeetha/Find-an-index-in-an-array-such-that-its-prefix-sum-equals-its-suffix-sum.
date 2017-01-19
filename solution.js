// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) 

{ 
    
  
    var size = A.length; 
    var lefts = [];
    var rights = [];
    
    if ( size == 1 ) 
    {  return 0; } 
    
    if ( size == 0 ) { return -1; } 
    
    var sum = 0; 
    var sumr=0;
    
    j=size-1;
    rights[j] = A[j];
    lefts[0]=A[0];
    
    for(i=1;i<size;i++)
    { 
        sum = sum + A[i]; 
        lefts[i]    = A[i] + lefts[i-1]; 
        rights[j-1] = A[j-1] +  rights[j];
        sumr = sumr + A[j-1]
        j--;
    } 
   
    if ( sum == 0 )  return 0;  
    
    if ( sumr == 0 ) return (size-1);
    
    for(i=0;i<(size-1);i++)
    { 
        if ( lefts[i]  ==  rights[i] )
        return i;
    
    } 
     
    
   
      return -1
        
}

function solution(A) 

{ 
    
    var size = A.length; 
    var prefix = [];
    var suffix = [];
    
    if ( size == 1 ) 
    {  return 0; } 
    
    if ( size == 0 ) { return -1; } 
    
   
    
    j=size-1;
    suffix[j] = A[j];
    prefix[0]=A[0];
    
    for(i=1;i<size;i++)
    { 
        prefix[i]    = A[i] + prefix[i-1]; 
        suffix[j-1] = A[j-1] +  suffix[j];
        j--;
    } 
  
   
    if ( suffix[1] == 0)  return 0;  
    
    if ( prefix[size-2] == 0 ) return (size-1);
    
    for(i=0;i<(size-1);i++)
    { 
        if ( prefix[i]  ==  suffix[i] )
        return i;
    
    } 
     
    
   
      return -1;
        
}

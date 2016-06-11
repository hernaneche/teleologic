var extintionTest=function(inp){
	 for(var k in db) {
        var being = db[k];	 
		if(being.name===inp){	       
          if(being.descentralized){          	   
				return being.name+ " "+goMessages[Math.floor(Math.random()*goMessages.length)];
			}else{				
				return being.name+" "+exMessages[Math.floor(Math.random()*exMessages.length)] ;
			}
		} 
	}
	return "I don't known it yet.";
};
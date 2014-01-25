#pragma strict

    var player : Transform;
    var speed : float = 10;
    var chaseDistance = 150;
    var lockPos : float = 0;
     
     
    function Update()
    {
    	
         
    if(Vector3.Distance(transform.position,player.position) <= chaseDistance)
    {
	    transform.LookAt(player);
	    transform.position += transform.forward*speed*Time.deltaTime;   
    }
     
    
    var distToPlayer = (transform.position - player.position).sqrMagnitude;
     transform.rotation = Quaternion.Euler(transform.rotation.eulerAngles.x, lockPos, lockPos);
    //if( distToPlayer < 5.0 ) {
    //print ("You lost");
    //}
     
    }
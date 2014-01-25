#pragma strict

    var player : Transform;
    var speed : float = 10;
    var chaseDistance = 150;
     
     
    function Update()
    {
     
     
     
     
    if(Vector3.Distance(transform.position,player.position) <= chaseDistance)
    {
    transform.LookAt(player);
    transform.position += transform.forward*speed*Time.deltaTime;
     
     
     
    }
     
    
    var distToPlayer = (transform.position - player.position).sqrMagnitude;
     
    if( distToPlayer < 5.0 ) {
    print ("You lost");
    }
     
    }
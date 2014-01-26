#pragma strict

    var player : Transform;
    var speed : float = 10;
    var chaseDistance = 150;
    var lockPos : float = 0;
    public var playlist : AudioClip[];
    var SoundSource : AudioSource;
    function Start()
    {
   		SoundSource = gameObject.AddComponent(AudioSource);
   		SoundSource.clip = playlist[Random.Range(0,3)];
    	SoundSource.Play(); 
    }
     
    function Update()
    {
    	
     
	    if(Vector3.Distance(transform.position,player.position) <= chaseDistance)
	    {
		    transform.LookAt(player);
		    transform.position += transform.forward*speed*Time.deltaTime;
		    transform.rotation = Quaternion.Euler(lockPos, lockPos, lockPos);
	    }
	     
	    
	    var distToPlayer = (transform.position - player.position).sqrMagnitude;
	    if(distToPlayer<10)
	    {
	    	SoundSource.clip = playlist[Random.Range(0,3)];
	     	AudioSource.PlayClipAtPoint(SoundSource.clip, transform.position);
	  	}

	    transform.rotation = Quaternion.Euler(lockPos, lockPos, lockPos);
     
    //if( distToPlayer < 5.0 ) {
    //print ("You lost");
    //}
     
    }
#pragma strict

    var player : Transform;
    var speed : float = 10;
    var chaseDistance = 150;
    var lockPos : float = 0;
    public var playlist : AudioClip[];
    var SoundSource : AudioSource;
    var playerCaught=false;
    public var hearts: Transform;
  
    function Start()
    {
   		SoundSource = gameObject.AddComponent(AudioSource);
   		SoundSource.clip = playlist[Random.Range(0,3)];
    }
     
    function Update()
    {
	    if(Vector3.Distance(transform.position,player.position) <= chaseDistance && !playerCaught )
	    {
		    transform.LookAt(player);
		    transform.position += transform.forward*speed*Time.deltaTime;
		    transform.rotation = Quaternion.Euler(90, lockPos, lockPos);
	    }
	     
	    
	    var distToPlayer = (transform.position - player.position).sqrMagnitude;
	    if(distToPlayer<10 && !playerCaught)
	    {
	    	SoundSource.clip = playlist[Random.Range(0,3)];
	     	AudioSource.PlayClipAtPoint(SoundSource.clip, transform.position);
	  	}
	  	
	  	if(distToPlayer<1 && !playerCaught)
	  	{
	  		playerCaught=true;
	  		var theCamera : GameObject =GameObject.Find("OVRPlayerController");
			//Instantiate (hearts, theCamera.transform.TransformPoint( Vector3.forward * 2 ), Quaternion.identity);
			Application.LoadLevel(1);
	  	}
	  	

	    transform.rotation = Quaternion.Euler(90, lockPos, lockPos);
     
    //if( distToPlayer < 5.0 ) {
    //print ("You lost");
    //}
     
    }
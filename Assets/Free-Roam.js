#pragma strict

    var moveSpeed : float = 2;
    var rotSpeed : float = 10;
    var moveDir : int = 1;
     
    function Update()
    {
	    if(!Physics.Raycast(transform.position, transform.forward, 5))
	    {
	    	transform.Translate(Vector3.forward * moveSpeed * Time.smoothDeltaTime);
	    }
	    else
	    {
		    if(Physics.Raycast(transform.position, - transform.right, 1))
		    {
		    moveDir = 1;
		    }
		    else if(Physics.Raycast(transform.position, transform.right, 1))
		    {
		    moveDir = -1;
		    }
		    transform.Rotate(Vector3.right, 90 * rotSpeed * Time.smoothDeltaTime * moveDir);
	    }
    }
    
    
  
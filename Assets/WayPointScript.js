  
    var waypoints : Transform[];
    var speed : int = 2;
    private var currentWaypoint : int;
    var loop : boolean = true;
    var player : Transform;
     
    function Start()
    {
    player = GameObject.FindWithTag("Player").transform;
    }
     
    function Update()
    {
    if(currentWaypoint < waypoints.length)
    {
     
    var target : Vector3 = waypoints[currentWaypoint].position;
    var moveDirection : Vector3 = target - transform.position;
    var range : Vector3 = player.position - transform.position;
     
    var velocity = rigidbody.velocity;
    if(moveDirection.magnitude < 1)
    {
    currentWaypoint++;
    }
    else if(range.magnitude < 10)
    {
     
    velocity = Vector3.zero;
    target = player.position;
    }
    else
    {
    velocity = moveDirection.normalized * speed;
    }
    }
    else
    {
    if(loop)
    {
    currentWaypoint = 0;
    }
    else
    {
    velocity = Vector3.zero;
    }
    }
    rigidbody.velocity = velocity;
    transform.LookAt(target);
    }


using UnityEngine;
using System.Collections;

public class orbScript : MonoBehaviour {
	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
	
	}

	void OnTriggerEnter(Collider obj){ // turn message on when player is inside the trigger
		OVRPlayerController.orbsCollected++;
		print(OVRPlayerController.orbsCollected);
		DestroyObject (gameObject);
	}
}

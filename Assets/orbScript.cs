using UnityEngine;
using System.Collections;

public class orbScript : MonoBehaviour {
	// Use this for initialization
	float seconds;
	void Start () {
	}
	
	// Update is called once per frame
	void Update () {
		seconds+=Time.deltaTime;

	}

	void OnTriggerEnter(Collider obj){ // turn message on when player is inside the trigger
		OVRPlayerController.orbsCollected++;
		audio.Play ();
		DestroyObject (gameObject);
	}
}

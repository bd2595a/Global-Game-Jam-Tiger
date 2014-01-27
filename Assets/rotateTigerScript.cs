using UnityEngine;
using System.Collections;

public class rotateTigerScript : MonoBehaviour {

	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
		transform.RotateAround (new Vector3(379.4948f,0f,297.0217f), Vector3.up, 20 * Time.deltaTime);
		}
}

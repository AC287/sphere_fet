# Sphere.ms Front-End-Test

#### Task:
This calendar is responsive, but on touch devices, it doesn't allow to drag and select multiple checkboxes as on the desktop version. Using the code on that page as your base, write a script that brings the user to a menu when one of the checkboxes is tapped on a touch device. The menu should give the user the ability to select a start time, an end time, and when the user is done with the menu, the checkboxes in the calendar should be selected based on the user's inputs.

Users should be able to repeat this process to select as many blocks of checkboxes as they want. While adding this functionality, make sure that none of the existing functionalities are broken.

---

##### Approaches:
* **Brainstormed on how menubox would looks like.**
  * ~~**user input text field** - (rejected) possibility of users entering undesirable inputs.~~
  * **user select with predefined value** - better functionality.
* **Bootstrap route**: has clean and responsive user interface.
  * Unsuccessful. Conflicting class names caused undesirable display.
* **jQuery UI route**: my second choice after unsuccessful bootstrap route. https://www.jqueryui.com

intellisense.annotate(ej.Accordion.prototype, {
	'addItem' : function (header_name, content, index, isAjaxReq){
		///<signature>
			///<summary>AddItem method is used to add the panel in dynamically. It receives the following parameters</summary>
			///<param name=' header_name' type='<span class="param-type">string</span>' optional='false' >specify the name of the header</param>
			///<param name=' content' type='<span class="param-type">string</span>' optional='false' >content of the new panel</param>
			///<param name=' index' type='<span class="param-type">number</span>' optional='false' >insertion place of the new panel</param>
			///<param name=' isAjaxReq' type='<span class="param-type">boolean</span>' optional='false' >Enable or disable the ajax request to the added panel</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'collapseAll' : function(){
		///<signature>
			///<summary>This method used to collapse the all the expanded items in accordion at a time.</summary>
		///</signature>
	},
	'destroy' : function(){
		///<signature>
			///<summary>destroy the Accordion widget all events bound using this._on will be unbind automatically and bring the control to pre-init state.</summary>
		///</signature>
	},
	'disable' : function(){
		///<signature>
			///<summary>Disables the accordion widget includes all the headers and content panels.</summary>
		///</signature>
	},
	'disableItems' : function (index){
		///<signature>
			///<summary>Disable the accordion widget item based on specified header index.</summary>
			///<param name=' index' type='<span class="param-type">array</span>' optional='false' >index values to disable the panels</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'enable' : function(){
		///<signature>
			///<summary>Enable the accordion widget includes all the headers and content panels.</summary>
		///</signature>
	},
	'enableItems' : function (index){
		///<signature>
			///<summary>Enable the accordion widget item based on specified header index.</summary>
			///<param name=' index' type='<span class="param-type">array</span>' optional='false' >index values to enable the panels</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'expandAll' : function(){
		///<signature>
			///<summary>To expand all the accordion widget items.</summary>
		///</signature>
	},
	'getItemsCount' : function(){
		///<signature>
			///<summary>Returns the total number of panels in the control.</summary>
		///</signature>
	},
	'hide' : function(){
		///<signature>
			///<summary>Hides the visible Accordion control.</summary>
		///</signature>
	},
	'refresh' : function(){
		///<signature>
			///<summary>The refresh method is used to adjust the control size based on the parent element dimension.</summary>
		///</signature>
	},
	'removeItem' : function (index){
		///<signature>
			///<summary>RemoveItem method is used to remove the specified index panel.It receives the parameter as number.</summary>
			///<param name=' index ' type='<span class="param-type">number</span>' optional='false' >specify the index value for remove the accordion panel.</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'show' : function(){
		///<signature>
			///<summary>Shows the hidden Accordion control.</summary>
		///</signature>
	}
});
intellisense.annotate(ej.Autocomplete.prototype, {
	'clearText' : function(){
		///<signature>
			///<summary>Clears the text in the Autocomplete textbox.</summary>
		///</signature>
	},
	'destroy' : function(){
		///<signature>
			///<summary>Destroys the Autocomplete widget.</summary>
		///</signature>
	},
	'disable' : function(){
		///<signature>
			///<summary>Disables the autocomplete widget.</summary>
		///</signature>
	},
	'enable' : function(){
		///<signature>
			///<summary>Enables the autocomplete widget.</summary>
		///</signature>
	},
	'getSelectedItems' : function(){
		///<signature>
			///<summary>Returns objects (data object) of all the selected items in the autocomplete textbox.</summary>
		///</signature>
	},
	'getValue' : function(){
		///<signature>
			///<summary>Returns the current selected value from the Autocomplete textbox.</summary>
		///</signature>
	},
	'search' : function(){
		///<signature>
			///<summary>Search the entered text and show it in the suggestion list if available.</summary>
		///</signature>
	},
	'open' : function(){
		///<signature>
			///<summary>Open up the autocomplete suggestion popup with all list items.</summary>
		///</signature>
	},
	'selectValueByKey' : function(){
		///<signature>
			///<summary>Sets the value of the Autocomplete textbox based on the given key value.</summary>
		///</signature>
	},
	'selectValueByText' : function(){
		///<signature>
			///<summary>Sets the value of the Autocomplete textbox based on the given input text value.</summary>
		///</signature>
	}
});
intellisense.annotate(ej.Button.prototype, {
	'destroy' : function(){
		///<signature>
			///<summary>destroy the button widget all events bound using this._on will be unbind automatically and bring the control to pre-init state.</summary>
		///</signature>
	},
	'disable' : function(){
		///<signature>
			///<summary>To disable the button</summary>
		///</signature>
	},
	'enable' : function(){
		///<signature>
			///<summary>To enable the button</summary>
		///</signature>
	}
});
intellisense.annotate(ej.Chart.prototype, {
	'animate' : function (options){
		///<signature>
			///<summary>Animates the series and/or indicators in Chart. When parameter is not passed to this method, then all the series and indicators present in Chart are animated.</summary>
			///<param name='options' type='<span class="param-type">array</span>' optional='false' ></param>
			///<param name='option' type='<span class="param-type">object</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'export' : function (type, url, exportMultipleChart){
		///<signature>
			///<summary>Exports chart as an image or to an excel file. Chart can be exported as an image only when exportCanvasRendering option is set to true.</summary>
			///<param name='type' type='<span class="param-type">string</span>' optional='false' ></param>
			///<param name='url' type='<span class="param-type">string</span>' optional='false' ></param>
			///<param name=' exportMultipleChart' type='<span class="param-type">boolean</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'redraw' : function(){
		///<signature>
			///<summary>Redraws the entire chart. You can call this method whenever you update, add or remove points from the data source or whenever you want to refresh the UI.</summary>
		///</signature>
	}
});
intellisense.annotate(ej.CheckBox.prototype, {
	'destroy' : function(){
		///<signature>
			///<summary>Destroy the CheckBox widget all events bound using this._on will be unbind automatically and bring the control to pre-init state.</summary>
		///</signature>
	},
	'disable' : function(){
		///<signature>
			///<summary>Disable the CheckBox to prevent all user interactions.</summary>
		///</signature>
	},
	'enable' : function(){
		///<signature>
			///<summary>To enable the CheckBox</summary>
		///</signature>
	},
	'isChecked' : function(){
		///<signature>
			///<summary>To Check the status of CheckBox</summary>
		///</signature>
	}
});
intellisense.annotate(ej.ColorPicker.prototype, {
	'disable' : function(){
		///<signature>
			///<summary>Disables the color picker control</summary>
		///</signature>
	},
	'enable' : function(){
		///<signature>
			///<summary>Enable the color picker control</summary>
		///</signature>
	},
	'getColor' : function(){
		///<signature>
			///<summary>Gets the selected color in RGB format</summary>
		///</signature>
	},
	'getValue' : function(){
		///<signature>
			///<summary>Gets the selected color value as string</summary>
		///</signature>
	},
	'hexCodeToRGB' : function(){
		///<signature>
			///<summary>To Convert color value from hexCode to RGB</summary>
		///</signature>
	},
	'hide' : function(){
		///<signature>
			///<summary>Hides the ColorPicker popup, if in opened state.</summary>
		///</signature>
	},
	'HSVToRGB' : function(){
		///<signature>
			///<summary>Convert color value from HSV to RGB</summary>
		///</signature>
	},
	'RGBToHEX' : function(){
		///<signature>
			///<summary>Convert color value from RGB to HEX</summary>
		///</signature>
	},
	'RGBToHSV' : function(){
		///<signature>
			///<summary>Convert color value from RGB to HSV</summary>
		///</signature>
	},
	'show' : function(){
		///<signature>
			///<summary>Open the ColorPicker popup.</summary>
		///</signature>
	}
});
intellisense.annotate(ej.DatePicker.prototype, {
	'disable' : function(){
		///<signature>
			///<summary>Disables the DatePicker control.</summary>
		///</signature>
	},
	'enable' : function(){
		///<signature>
			///<summary>Enable the DatePicker control, if it is in disabled state.</summary>
		///</signature>
	},
	'getValue' : function(){
		///<signature>
			///<summary>Returns the current date value in the DatePicker control.</summary>
		///</signature>
	},
	'hide' : function(){
		///<signature>
			///<summary>Close the DatePicker popup, if it is in opened state.</summary>
		///</signature>
	},
	'show' : function(){
		///<signature>
			///<summary>Opens the DatePicker popup.</summary>
		///</signature>
	}
});
intellisense.annotate(ej.DateTimePicker.prototype, {
	'disable' : function(){
		///<signature>
			///<summary>Disables the DateTimePicker control.</summary>
		///</signature>
	},
	'enable' : function(){
		///<signature>
			///<summary>Enables the DateTimePicker control.</summary>
		///</signature>
	},
	'getValue' : function(){
		///<signature>
			///<summary>Returns the current datetime value in the DateTimePicker.</summary>
		///</signature>
	},
	'hide' : function(){
		///<signature>
			///<summary>Hides or closes the DateTimePicker popup.</summary>
		///</signature>
	},
	'setCurrentDateTime' : function(){
		///<signature>
			///<summary>Updates the current system date value and time value to the DateTimePicker.</summary>
		///</signature>
	},
	'show' : function(){
		///<signature>
			///<summary>Shows or opens the DateTimePicker popup.</summary>
		///</signature>
	}
});
intellisense.annotate(ej.Diagram.prototype, {
	'add' : function (node){
		///<signature>
			///<summary>Add nodes and connectors to diagram at runtime</summary>
			///<param name='node' type='object' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'addLabel' : function (nodeName, newLabel){
		///<signature>
			///<summary>Add a label to a node at runtime</summary>
			///<param name='nodeName' type='string' optional='false' ></param>
			///<param name='newLabel' type='object' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'addPhase' : function (name, options){
		///<signature>
			///<summary>Add a phase to a swimlane at runtime</summary>
			///<param name='name' type='string' optional='false' ></param>
			///<param name='options' type='object' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'addPorts' : function (name, ports){
		///<signature>
			///<summary>Add a collection of ports to the node specified by name</summary>
			///<param name='name' type='string' optional='false' ></param>
			///<param name='ports' type='array' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'addSelection' : function (node, clearSelection){
		///<signature>
			///<summary>Add the specified node to selection list</summary>
			///<param name='node' type='object' optional='false' ></param>
			///<param name='[clearSelection]' type='boolean' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'align' : function (direction){
		///<signature>
			///<summary>Align the selected objects based on the reference object and direction</summary>
			///<param name='direction' type='string' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'bringIntoView' : function (rect){
		///<signature>
			///<summary>Bring the specified portion of the diagram content to the diagram viewport</summary>
			///<param name='rect' type='object' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'bringToCenter' : function (rect){
		///<signature>
			///<summary>Bring the specified portion of the diagram content to the center of the diagram viewport</summary>
			///<param name='rect' type='object' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'bringToFront' : function(){
		///<signature>
			///<summary>Visually move the selected object over all other intersected objects</summary>
		///</signature>
	},
	'clear' : function(){
		///<signature>
			///<summary>Remove all the elements from diagram</summary>
		///</signature>
	},
	'clearSelection' : function(){
		///<signature>
			///<summary>Remove the current selection in diagram</summary>
		///</signature>
	},
	'copy' : function(){
		///<signature>
			///<summary>Copy the selected object to internal clipboard and get the copied object</summary>
		///</signature>
	},
	'cut' : function(){
		///<signature>
			///<summary>Cut the selected object from diagram to diagram internal clipboard</summary>
		///</signature>
	},
	'exportDiagram' : function (options){
		///<signature>
			///<summary>Export the diagram as downloadable files or as data</summary>
			///<param name='[options]' type='<span class="param-type">Object</span>' optional='false' ></param>
			///<param name='fileName' type='<span class="param-type">string</span>' optional='false' ></param>
			///<param name='format' type='<span class="param-type">string</span>' optional='false' ></param>
			///<param name='mode' type='<span class="param-type">string</span>' optional='false' ></param>
			///<param name='region' type='<span class="param-type">string</span>' optional='false' ></param>
			///<param name='bounds' type='<span class="param-type">object</span>' optional='false' ></param>
			///<param name='margin' type='<span class="param-type">object</span>' optional='false' ></param>
			///<returns type ='' />
		///</signature>
	},
	'findNode' : function (name){
		///<signature>
			///<summary>Read a node/connector object by its name</summary>
			///<param name='name' type='string' optional='false' ></param>
			///<returns type ='' />
		///</signature>
	},
	'fitToPage' : function (mode, region, margin){
		///<signature>
			///<summary>Fit the diagram content into diagram viewport</summary>
			///<param name='[mode]' type='string' optional='false' ></param>
			///<param name='[region]' type='string' optional='false' ></param>
			///<param name='[margin]' type='object' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'group' : function(){
		///<signature>
			///<summary>Group the selected nodes and connectors</summary>
		///</signature>
	},
	'insertLabel' : function (name, label, index){
		///<signature>
			///<summary>Insert a label into a node's label collection at runtime</summary>
			///<param name='name' type='string' optional='false' ></param>
			///<param name='label' type='object' optional='false' ></param>
			///<param name='[index]' type='number' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'layout' : function(){
		///<signature>
			///<summary>Refresh the diagram with the specified layout</summary>
		///</signature>
	},
	'load' : function (data){
		///<signature>
			///<summary>Load the diagram</summary>
			///<param name='data' type='object' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'moveForward' : function(){
		///<signature>
			///<summary>Visually move the selected object over its closest intersected object</summary>
		///</signature>
	},
	'nudge' : function (direction, delta){
		///<signature>
			///<summary>Move the selected objects by either one pixel or by the pixels specified through argument</summary>
			///<param name='direction' type='string' optional='false' ></param>
			///<param name='[delta]' type='number' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'paste' : function (object, rename){
		///<signature>
			///<summary>Paste the selected object from internal clipboard to diagram</summary>
			///<param name='[object]' type='object' optional='false' ></param>
			///<param name='[rename]' type='boolean' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'print' : function(){
		///<signature>
			///<summary>Print the diagram as image</summary>
		///</signature>
	},
	'redo' : function(){
		///<signature>
			///<summary>Restore the last action that was reverted</summary>
		///</signature>
	},
	'refresh' : function(){
		///<signature>
			///<summary>Refresh the diagram at runtime</summary>
		///</signature>
	},
	'remove' : function (node){
		///<signature>
			///<summary>Remove either the given node/connector or the selected element from diagram</summary>
			///<param name='[node]' type='object' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'removeSelection' : function (node){
		///<signature>
			///<summary>Remove a particular object from selection list</summary>
			///<param name='node' type='object' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'sameHeight' : function(){
		///<signature>
			///<summary>Scale the selected objects to the height of the first selected object</summary>
		///</signature>
	},
	'sameSize' : function(){
		///<signature>
			///<summary>Scale the selected objects to the size of the first selected object</summary>
		///</signature>
	},
	'sameWidth' : function(){
		///<signature>
			///<summary>Scale the selected objects to the width of the first selected object</summary>
		///</signature>
	},
	'save' : function(){
		///<signature>
			///<summary>Returns the diagram as serialized JSON</summary>
		///</signature>
	},
	'scrollToNode' : function (node){
		///<signature>
			///<summary>Bring the node into view</summary>
			///<param name='node' type='object' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'selectAll' : function(){
		///<signature>
			///<summary>Select all nodes and connector in diagram</summary>
		///</signature>
	},
	'sendBackward' : function(){
		///<signature>
			///<summary>Visually move the selected object behind its closest intersected object</summary>
		///</signature>
	},
	'sendToBack' : function(){
		///<signature>
			///<summary>Visually move the selected object behind all other intersected objects</summary>
		///</signature>
	},
	'spaceAcross' : function(){
		///<signature>
			///<summary>Update the horizontal space between the selected objects as equal and within the selection boundary</summary>
		///</signature>
	},
	'spaceDown' : function(){
		///<signature>
			///<summary>Update the vertical space between the selected objects as equal and within the selection boundary</summary>
		///</signature>
	},
	'startLabelEdit' : function (node, label){
		///<signature>
			///<summary>Move the specified label to edit mode</summary>
			///<param name='node' type='object' optional='false' ></param>
			///<param name='label' type='object' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'undo' : function(){
		///<signature>
			///<summary>Reverse the last action that was performed</summary>
		///</signature>
	},
	'ungroup' : function(){
		///<signature>
			///<summary>Ungroup the selected group</summary>
		///</signature>
	},
	'update' : function (options){
		///<signature>
			///<summary>Update diagram at runtime</summary>
			///<param name='options' type='object' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'updateConnector' : function (name, options){
		///<signature>
			///<summary>Update Connectors at runtime</summary>
			///<param name='name' type='string' optional='false' ></param>
			///<param name='options' type='object' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'updateLabel' : function (nodeName, label, options){
		///<signature>
			///<summary>Update the given label at runtime</summary>
			///<param name='nodeName' type='string' optional='false' ></param>
			///<param name='label' type='object' optional='false' ></param>
			///<param name='options' type='object' optional='false' ></param>
			///<returns type ='' />
		///</signature>
	},
	'updateNode' : function (name, options){
		///<signature>
			///<summary>Update nodes at runtime</summary>
			///<param name='name' type='string' optional='false' ></param>
			///<param name='options' type='object' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'updatePort' : function (nodeName, port, options){
		///<signature>
			///<summary>Update a port with its modified properties at runtime</summary>
			///<param name='nodeName' type='string' optional='false' ></param>
			///<param name='port' type='object' optional='false' ></param>
			///<param name='options' type='object' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'updateSelectedObject' : function (name){
		///<signature>
			///<summary>Update the specified node as selected object</summary>
			///<param name='name' type='string' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'updateSelection' : function (showUserHandles){
		///<signature>
			///<summary>Update the selection at runtime</summary>
			///<param name='[showUserHandles]' type='boolean' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'updateUserHandles' : function (node){
		///<signature>
			///<summary>Update userhandles with respect to the given node</summary>
			///<param name='node' type='object' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'updateViewPort' : function(){
		///<signature>
			///<summary>Update the diagram viewport at runtime</summary>
		///</signature>
	},
	'upgrade' : function (data){
		///<signature>
			///<summary>Upgrade the diagram from old version</summary>
			///<param name='data' type='object' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'zoomTo' : function (zoom){
		///<signature>
			///<summary>Used to zoomIn/zoomOut diagram</summary>
			///<param name='zoom' type='object' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	}
});
intellisense.annotate(ej.Dialog.prototype, {
	'close<span class="signature">' : function (){
		///<signature>
			///<summary>Closes the dialog widget dynamically.</summary>
			///<param name='responseText' type='<span class="param-type">string</span>' optional='false' ></param>
			///<param name='status' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='statusText' type='<span class="param-type">string</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'collapse<span class="signature">' : function (){
		///<signature>
			///<summary>Collapses the content area when it is expanded.</summary>
			///<param name='responseText' type='<span class="param-type">string</span>' optional='false' ></param>
			///<param name='status' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='statusText' type='<span class="param-type">string</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'destroy<span class="signature">' : function (){
		///<signature>
			///<summary>Destroys the Dialog widget. </summary>
			///<param name='responseText' type='<span class="param-type">string</span>' optional='false' ></param>
			///<param name='status' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='statusText' type='<span class="param-type">string</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'expand<span class="signature">' : function (){
		///<signature>
			///<summary>Expands the content area when it is collapsed.</summary>
			///<param name='responseText' type='<span class="param-type">string</span>' optional='false' ></param>
			///<param name='status' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='statusText' type='<span class="param-type">string</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'isOpened<span class="signature">' : function (){
		///<signature>
			///<summary>Checks whether the Dialog widget is opened or not. This methods returns Boolean value.</summary>
			///<param name='responseText' type='<span class="param-type">string</span>' optional='false' ></param>
			///<param name='status' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='statusText' type='<span class="param-type">string</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'isOpen<span class="signature">' : function (){
		///<signature>
			///<summary>Checks whether the Dialog widget is opened or not. This methods returns Boolean value.</summary>
			///<param name='responseText' type='<span class="param-type">string</span>' optional='false' ></param>
			///<param name='status' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='statusText' type='<span class="param-type">string</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'maximize<span class="signature">' : function (){
		///<signature>
			///<summary>Maximizes the Dialog widget.</summary>
			///<param name='responseText' type='<span class="param-type">string</span>' optional='false' ></param>
			///<param name='status' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='statusText' type='<span class="param-type">string</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'minimize<span class="signature">' : function (){
		///<signature>
			///<summary>Minimizes the Dialog widget.</summary>
			///<param name='responseText' type='<span class="param-type">string</span>' optional='false' ></param>
			///<param name='status' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='statusText' type='<span class="param-type">string</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'open<span class="signature">' : function (){
		///<signature>
			///<summary>Opens the Dialog widget.</summary>
			///<param name='responseText' type='<span class="param-type">string</span>' optional='false' ></param>
			///<param name='status' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='statusText' type='<span class="param-type">string</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'pin<span class="signature">' : function (){
		///<signature>
			///<summary>Pins the dialog in its current position.</summary>
			///<param name='responseText' type='<span class="param-type">string</span>' optional='false' ></param>
			///<param name='status' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='statusText' type='<span class="param-type">string</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'restore<span class="signature">' : function (){
		///<signature>
			///<summary>Restores the dialog.</summary>
			///<param name='responseText' type='<span class="param-type">string</span>' optional='false' ></param>
			///<param name='status' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='statusText' type='<span class="param-type">string</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'unpin<span class="signature">' : function (){
		///<signature>
			///<summary>Unpins the Dialog widget.</summary>
			///<param name='responseText' type='<span class="param-type">string</span>' optional='false' ></param>
			///<param name='status' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='statusText' type='<span class="param-type">string</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'setTitle<span class="signature">' : function (title){
		///<signature>
			///<summary>Sets the title for the Dialog widget.</summary>
			///<param name='responseText' type='<span class="param-type">string</span>' optional='false' ></param>
			///<param name='status' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='statusText' type='<span class="param-type">string</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'setContent<span class="signature">' : function (content){
		///<signature>
			///<summary>Sets the content for the Dialog widget dynamically. </summary>
			///<param name='responseText' type='<span class="param-type">string</span>' optional='false' ></param>
			///<param name='status' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='statusText' type='<span class="param-type">string</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'focus<span class="signature">' : function (){
		///<signature>
			///<summary>Sets the focus on the Dialog widget.</summary>
			///<param name='responseText' type='<span class="param-type">string</span>' optional='false' ></param>
			///<param name='status' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='statusText' type='<span class="param-type">string</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	}
});
intellisense.annotate(ej.Draggable.prototype, {
	'_destroy' : function(){
		///<signature>
			///<summary>destroy in the dragable.</summary>
		///</signature>
	}
});
intellisense.annotate(ej.DropDownList.prototype, {
	'addItem' : function (data){
		///<signature>
			///<summary>Adding a single item or an array of items into the DropDownList allows you to specify all the field attributes such as value, template, image URL, and html attributes for those items. </summary>
			///<param name='data' type='object|array' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'checkAll' : function(){
		///<signature>
			///<summary>This method is used to select all the items in the DropDownList.</summary>
		///</signature>
	},
	'clearText' : function(){
		///<signature>
			///<summary>Clears the text in the DropDownList textbox.</summary>
		///</signature>
	},
	'destroy' : function(){
		///<signature>
			///<summary>Destroys the DropDownList widget.</summary>
		///</signature>
	},
	'disable' : function(){
		///<signature>
			///<summary>This property is used to disable the DropDownList widget.</summary>
		///</signature>
	},
	'disableItemsByIndices' : function (index){
		///<signature>
			///<summary>This property disables the set of items in the DropDownList.</summary>
			///<param name='index' type='string|number|array' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'enable' : function(){
		///<signature>
			///<summary>This property enables the DropDownList control.</summary>
		///</signature>
	},
	'enableItemsByIndices' : function (index){
		///<signature>
			///<summary>Enables an Item or set of Items that are disabled in the DropDownList</summary>
			///<param name='index' type='string|number|array' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'getItemDataByValue' : function (value){
		///<signature>
			///<summary>This method retrieves the items using given value.</summary>
			///<param name='value' type='string|number|object' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'getListData' : function(){
		///<signature>
			///<summary>This method is used to retrieve the items that are bound with the DropDownList.</summary>
		///</signature>
	},
	'getSelectedItem' : function(){
		///<signature>
			///<summary>This method is used to get the selected items in the DropDownList.</summary>
		///</signature>
	},
	'getSelectedValue' : function(){
		///<signature>
			///<summary>This method is used to retrieve the items value that are selected in the DropDownList.</summary>
		///</signature>
	},
	'hidePopup' : function(){
		///<signature>
			///<summary>This method hides the suggestion popup in the DropDownList.</summary>
		///</signature>
	},
	'selectItemsByIndices' : function (indices){
		///<signature>
			///<summary>This method is used to select the list of items in the DropDownList through the Index of the items.</summary>
			///<param name='index' type='string|number|array' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'selectItemByText' : function (text){
		///<signature>
			///<summary>This method is used to select an item in the DropDownList by using the given text value.</summary>
			///<param name='index' type='string|number|array' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'selectItemByValue' : function (value){
		///<signature>
			///<summary>This method is used to select an item in the DropDownList by using the given value.</summary>
			///<param name='index' type='string|number|array' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'showPopup' : function(){
		///<signature>
			///<summary>This method shows the DropDownList control with the suggestion popup.</summary>
		///</signature>
	},
	'unCheckAll' : function(){
		///<signature>
			///<summary>This method is used to unselect all the items in the DropDownList.</summary>
		///</signature>
	},
	'unselectItemsByIndices' : function (indices){
		///<signature>
			///<summary>This method is used to unselect the list of items in the DropDownList through Index of the items.</summary>
			///<param name='index' type='string|number|array' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'unselectItemByText' : function (text){
		///<signature>
			///<summary>This method is used to unselect an item in the DropDownList by using the given text value.</summary>
			///<param name='index' type='string|number|array' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'unselectItemByValue' : function (value){
		///<signature>
			///<summary>This method is used to unselect an item in the DropDownList by using the given value.</summary>
			///<param name='index' type='string|number|array' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	}
});
intellisense.annotate(ej.Droppable.prototype, {
	'_destroy' : function(){
		///<signature>
			///<summary>destroy in the Droppable.</summary>
		///</signature>
	}
});
intellisense.annotate(ej.FileExplorer.prototype, {
	'adjustSize' : function(){
		///<signature>
			///<summary>Refresh the size of FileExplorer control.</summary>
		///</signature>
	},
	'disableMenuItem' : function (item){
		///<signature>
			///<summary>Disable the particular context menu item.</summary>
			///<param name=' item' type='<span class="param-type">string | element</span>' optional='false' >Id of the menu item/ Menu element to be disabled </param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'disableToolbarItem' : function (item){
		///<signature>
			///<summary>Disable the particular toolbar item.</summary>
			///<param name=' item' type='<span class="param-type">string | element</span>' optional='false' >Id of the toolbar item/ Tool item element to be disabled </param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'enableMenuItem' : function (item){
		///<signature>
			///<summary>Enable the particular context menu item.</summary>
			///<param name=' item' type='<span class="param-type">string | Element</span>' optional='false' >Id of the menu item/ Menu element to be Enabled </param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'enableToolbarItem' : function (item){
		///<signature>
			///<summary>Enable the particular toolbar item</summary>
			///<param name=' item' type='<span class="param-type">string | Element</span>' optional='false' >Id of the tool item/ Tool item element to be Enabled </param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'refresh' : function(){
		///<signature>
			///<summary>Refresh the content of the selected folder in FileExplorer control.</summary>
		///</signature>
	},
	'removeToolbarItem' : function (item){
		///<signature>
			///<summary>Remove the particular toolbar item.</summary>
			///<param name=' item' type='<span class="param-type">string | Element</span>' optional='false' >Id of the tool item/ tool item element to be removed </param>
			///<returns type ='Syncfusion' />
		///</signature>
	}
});
intellisense.annotate(ej.GroupButton.prototype, {
	'deselectItem' : function(){
		///<signature>
			///<summary>Remove the selection state of the specified the button element from the GroupButton</summary>
		///</signature>
	},
	'destroy' : function(){
		///<signature>
			///<summary>Destroy the GroupButton widget all events bound using this._on will be unbind automatically and bring the control to pre-init state.</summary>
		///</signature>
	},
	'disable' : function(){
		///<signature>
			///<summary>Disables the GroupButton control</summary>
		///</signature>
	},
	'disableItem' : function(){
		///<signature>
			///<summary>Disable the specified button element from the ejGroupButton control.</summary>
		///</signature>
	},
	'enable' : function(){
		///<signature>
			///<summary>Enables the disabled ejGroupButton control.</summary>
		///</signature>
	},
	'enableItem' : function(){
		///<signature>
			///<summary>Enable the specified disabled button element from the ejGroupButton control.</summary>
		///</signature>
	},
	'getIndex' : function(){
		///<signature>
			///<summary>Returns the index value for specified button element in the GroupButton control.</summary>
		///</signature>
	},
	'getSelectedItem' : function(){
		///<signature>
			///<summary>This method returns the list of active state button elements from the GroupButton control.</summary>
		///</signature>
	},
	'hide' : function(){
		///<signature>
			///<summary>Hides the GroupButton control</summary>
		///</signature>
	},
	'hideItem' : function(){
		///<signature>
			///<summary>Hide the specified button element from the ejGroupButton control.</summary>
		///</signature>
	},
	'isDisabled' : function(){
		///<signature>
			///<summary>Returns the disabled state of the specified element button element in GroupButton as Boolean.</summary>
		///</signature>
	},
	'isSelected' : function(){
		///<signature>
			///<summary>Returns the state of the specified button element as Boolean.</summary>
		///</signature>
	},
	'selectItem' : function(){
		///<signature>
			///<summary>Public method used to select the specified button element from the ejGroupButton control.</summary>
		///</signature>
	},
	'show' : function(){
		///<signature>
			///<summary>Shows the GroupButton control, if its hide.</summary>
		///</signature>
	},
	'showItem' : function(){
		///<signature>
			///<summary>Show the specified hidden button element from the ejGroupButton control. </summary>
		///</signature>
	}
});
intellisense.annotate(ej.Kanban.prototype, {
	'addCard' : function (primaryKey,card){
		///<signature>
			///<summary>Add a new card in kanban control.If parameters are not given default dialog will be open</summary>
			///<param name='primaryKey' type='<span class="param-type">string</span>' optional='true' ></param>
			///<param name='card' type='<span class="param-type">array</span>' optional='true' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'clearSearch' : function(){
		///<signature>
			///<summary>Method used for send a clear search request to kanban.</summary>
		///</signature>
	},
	'clearSelection' : function(){
		///<signature>
			///<summary>It is used to clear all the card selection.</summary>
		///</signature>
	},
	'collapseAll' : function(){
		///<signature>
			///<summary>Collapse all the swimlane rows in kanban.</summary>
		///</signature>
	},
	'columns' : function (column,key,action){
		///<signature>
			///<summary>Add or remove columns in kanban columns collections</summary>
			///<param name='columndetails' type='<span class="param-type">array/string</span>' optional='false' ></param>
			///<param name='keyvalue' type='<span class="param-type">array/string</span>' optional='false' ></param>
			///<param name='action' type='<span class="param-type">string</span>' optional='true' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'cancelEdit' : function(){
		///<signature>
			///<summary>Send a cancel request of add/edit card in kanban</summary>
		///</signature>
	},
	'destroy' : function(){
		///<signature>
			///<summary>Destroy the kanban widget all events bound using this._on will be unbind automatically and bring the control to pre-init state.</summary>
		///</signature>
	},
	'deleteCard' : function (Key){
		///<signature>
			///<summary>Delete a card in kanban control.</summary>
			///<param name='Key' type='<span class="param-type">string/number</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'dataSource' : function (datasource){
		///<signature>
			///<summary>Refresh the kanban with new data source.</summary>
			///<param name='datasource' type='<span class="param-type">array</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'endEdit' : function(){
		///<signature>
			///<summary>Send a save request in kanban when any card is in edit/new add card state.</summary>
		///</signature>
	},
	'toggleColumn' : function (headerText or $div){
		///<signature>
			///<summary>toggleColumn based on the headerText in kanban.</summary>
			///<param name=' headerText ' type='<span class="param-type">object</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'toggleCard' : function ($div or key){
		///<signature>
			///<summary>Expand or collapse the card based on the state of target "div"</summary>
			///<param name=' key ' type='<span class="param-type">string/number</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'toggleSwimlane' : function (($div or key){
		///<signature>
			///<summary>Expand or collapse the swimlane row based on the state of target "div"</summary>
			///<param name=' $div ' type='<span class="param-type">object</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'expandAll' : function(){
		///<signature>
			///<summary>Expand all the swimlane rows in kanban.</summary>
		///</signature>
	},
	'getVisibleColumnNames' : function(){
		///<signature>
			///<summary>used for get the names of all the visible column name collections in kanban.</summary>
		///</signature>
	},
	'getScrollObject' : function(){
		///<signature>
			///<summary>Get the scroller object of kanban.</summary>
		///</signature>
	},
	'getColumnByHeaderText' : function (headerText){
		///<signature>
			///<summary>Get the column details based on the given header text in kanban.</summary>
			///<param name=' headerText ' type='<span class="param-type">string</span>' optional='false' ></param>
			///<returns type ='' />
		///</signature>
	},
	'hideColumns' : function (headerText){
		///<signature>
			///<summary>Hide columns from the kanban based on the header text</summary>
			///<param name=' headerText ' type='<span class="param-type">array/string</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'refreshTemplate' : function(){
		///<signature>
			///<summary>Refresh the template of the kanban</summary>
		///</signature>
	},
	'refresh' : function (templateRefresh){
		///<signature>
			///<summary>Refresh the kanban contents.The template refreshment is based on the argument passed along with this method</summary>
			///<param name=' templateRefresh ' type='<span class="param-type">boolean</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'searchCards' : function (searchString){
		///<signature>
			///<summary>send a search request to kanban with specified string passed in it.</summary>
			///<param name='{% highlight html %} searchString{% endhighlight %}' type='<span class="param-type">string</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'setValidationToField' : function (name, rules){
		///<signature>
			///<summary>Method used for set validation to a field during editing.</summary>
			///<param name='name' type='<span class="param-type">string</span>' optional='false' ></param>
			///<param name='rules' type='<span class="param-type">object</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'startEdit' : function ($div or key){
		///<signature>
			///<summary>Send an edit card request in kanban.Parameter will be Html element or primary key</summary>
			///<param name=' $div ' type='<span class="param-type">object</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'showColumns' : function (headerText){
		///<signature>
			///<summary>Show columns in the kanban based on the header text.</summary>
			///<param name=' headerText ' type='<span class="param-type">array/string</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'updateCard' : function (key,data){
		///<signature>
			///<summary>Update a card in kanban control based on key and json data given.</summary>
			///<param name=' key ' type='<span class="param-type">string</span>' optional='false' ></param>
			///<param name=' data ' type='<span class="param-type">array</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	}
});
intellisense.annotate(ej.ListView.prototype, {
	'addItem' : function (item, index){
		///<signature>
			///<summary>To add item in the given index.</summary>
			///<param name=' item' type='<span class="param-type">string</span>' optional='false' >Specifies the item to be added in ListView</param>
			///<param name=' index' type='<span class="param-type">number</span>' optional='false' >Specifies the index where item to be added</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'checkAllItem' : function(){
		///<signature>
			///<summary>To check all the items.</summary>
		///</signature>
	},
	'checkItem' : function (index){
		///<signature>
			///<summary>To check item in the given index.</summary>
			///<param name=' index' type='<span class="param-type">number</span>' optional='false' >Specifies the index of the item to be checked</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'clear' : function(){
		///<signature>
			///<summary>To clear all the list item in the control before updating with new datasource.</summary>
		///</signature>
	},
	'deActive' : function (index){
		///<signature>
			///<summary>To make the item in the given index to be default state.</summary>
			///<param name=' index' type='<span class="param-type">number</span>' optional='false' >Specifies the index to make the item to be in default state.</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'disableItem' : function (index){
		///<signature>
			///<summary>To disable item in the given index.</summary>
			///<param name=' index' type='<span class="param-type">number</span>' optional='false' >Specifies the index value to be disabled.</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'enableItem' : function (index){
		///<signature>
			///<summary>To enable item in the given index.</summary>
			///<param name=' index' type='<span class="param-type">number</span>' optional='false' >Specifies the index value to be enabled.</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'getActiveItem' : function(){
		///<signature>
			///<summary>To get the active item.</summary>
		///</signature>
	},
	'getActiveItemText' : function(){
		///<signature>
			///<summary>To get the text of the active item.</summary>
		///</signature>
	},
	'getCheckedItems' : function(){
		///<signature>
			///<summary>To get all the checked items.</summary>
		///</signature>
	},
	'getCheckedItemsText' : function(){
		///<signature>
			///<summary>To get the text of all the checked items.</summary>
		///</signature>
	},
	'getItemsCount' : function(){
		///<signature>
			///<summary>To get the total item count.</summary>
		///</signature>
	},
	'getItemText' : function (index){
		///<signature>
			///<summary>To get the text of the item in the given index.</summary>
			///<param name=' index' type='<span class="param-type">string|number</span>' optional='false' >Specifies the index value to get the textvalue.</param>
			///<returns type ='' />
		///</signature>
	},
	'hasChild' : function (index){
		///<signature>
			///<summary>To check whether the item in the given index has child item.</summary>
			///<param name=' index' type='<span class="param-type">number</span>' optional='false' >Specifies the index value to check the item has child or not.</param>
			///<returns type ='' />
		///</signature>
	},
	'hide' : function(){
		///<signature>
			///<summary>To hide the list.</summary>
		///</signature>
	},
	'hideItem' : function (index){
		///<signature>
			///<summary>To hide item in the given index.</summary>
			///<param name=' index' type='<span class="param-type">number</span>' optional='false' >Specifies the index value to hide the item.</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'isChecked' : function(){
		///<signature>
			///<summary>To check whether item in the given index is checked.</summary>
		///</signature>
	},
	'loadAjaxContent' : function (item){
		///<signature>
			///<summary>To load the ajax content while selecting the item.</summary>
			///<param name=' item' type='<span class="param-type">string</span>' optional='false' >Specifies the item to load the ajax content.</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'removeCheckMark' : function (index){
		///<signature>
			///<summary>To remove the check mark either for specific item in the given index or for all items.</summary>
			///<param name=' index' type='<span class="param-type">number</span>' optional='false' >Specifies the index value to remove the checkbox.</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'removeItem' : function (index){
		///<signature>
			///<summary>To remove item in the given index.</summary>
			///<param name=' index' type='<span class="param-type">number</span>' optional='false' >Specifies the index value to remove the item.</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'selectItem' : function (index){
		///<signature>
			///<summary>To select item in the given index.</summary>
			///<param name=' index' type='<span class="param-type">number</span>' optional='false' >Specifies the index value to select the item.</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'setActive' : function (index){
		///<signature>
			///<summary>To make the item in the given index to be active state.</summary>
			///<param name=' index' type='<span class="param-type">number</span>' optional='false' >Specifies the index value to make the item in active state.</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'show' : function(){
		///<signature>
			///<summary>To show the list.</summary>
		///</signature>
	},
	'showItem' : function (index){
		///<signature>
			///<summary>To show item in the given index.</summary>
			///<param name=' index' type='<span class="param-type">number</span>' optional='false' >Specifies the index value to show the hided item.</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'unCheckAllItem' : function(){
		///<signature>
			///<summary>To uncheck all the items.</summary>
		///</signature>
	},
	'unCheckItem' : function (index){
		///<signature>
			///<summary>To uncheck item in the given index.</summary>
			///<param name=' index' type='<span class="param-type">number</span>' optional='false' >Specifies the index value to uncheck the item.</param>
			///<returns type ='Syncfusion' />
		///</signature>
	}
});
intellisense.annotate(ej.Map.prototype, {
	'navigateTo' : function (latitude, longitude, level){
		///<signature>
			///<summary>Method for navigating to specific shape based on latitude, longitude and zoomlevel.</summary>
			///<param name='{% highlight html %}latitude{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %}longitude{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %}level{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'pan' : function (direction){
		///<signature>
			///<summary>Method to perform map panning</summary>
			///<param name='{% highlight html %}direction{% endhighlight %}' type='<span class="param-type">string</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'refresh' : function(){
		///<signature>
			///<summary>Method to reload the map.</summary>
		///</signature>
	},
	'refreshLayers' : function(){
		///<signature>
			///<summary>Method to reload the shapeLayers with updated values</summary>
		///</signature>
	},
	'refreshNavigationControl' : function (navigation){
		///<signature>
			///<summary>Method to reload the navigation control with updated values.</summary>
			///<param name='{% highlight html %}navigation{% endhighlight %}' type='<span class="param-type">object</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'zoom' : function (level, isAnimate){
		///<signature>
			///<summary>Method to perform map zooming.</summary>
			///<param name='{% highlight html %}level{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='{% highlight html %}isAnimate{% endhighlight %}' type='<span class="param-type">boolean</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	}
});
intellisense.annotate(ej.MaskEdit.prototype, {
	'clear' : function(){
		///<signature>
			///<summary>To clear the text in mask edit textbox control.</summary>
		///</signature>
	},
	'disable' : function(){
		///<signature>
			///<summary>To disable the mask edit textbox control.</summary>
		///</signature>
	},
	'enable' : function(){
		///<signature>
			///<summary>To enable the mask edit textbox control.</summary>
		///</signature>
	},
	'get_StrippedValue' : function(){
		///<signature>
			///<summary>To obtained the pure value of the text value, removes all the symbols in mask edit textbox control.</summary>
		///</signature>
	},
	'get_UnstrippedValue' : function(){
		///<signature>
			///<summary>To obtained the textbox value as such that, Just replace all '_' to ' '(space) in mask edit textbox control.</summary>
		///</signature>
	}
});
intellisense.annotate(ej.Menu.prototype, {
	'disable' : function(){
		///<signature>
			///<summary>Disables the Menu control.</summary>
		///</signature>
	},
	'disableItem' : function (itemtext){
		///<signature>
			///<summary>Specifies the Menu Item to be disabled by using the Menu Item Text.</summary>
			///<param name=' itemtext' type='<span class="param-type">string</span>' optional='false' >Specifies the Menu Item Text to be disabled.</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'disableItembyID' : function (itemid){
		///<signature>
			///<summary>Specifies the Menu Item to be disabled by using the Menu Item Id.</summary>
			///<param name=' itemid' type='<span class="param-type">string|number</span>' optional='false' >Specifies the Menu Item id to be disabled</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'enable' : function(){
		///<signature>
			///<summary>Enables the Menu control.</summary>
		///</signature>
	},
	'enableItem' : function (itemtext){
		///<signature>
			///<summary>Specifies the Menu Item to be enabled by using the Menu Item Text.</summary>
			///<param name=' itemtext' type='<span class="param-type">string</span>' optional='false' >Specifies the Menu Item Text to be enabled.</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'enableItembyID' : function (itemid){
		///<signature>
			///<summary>Specifies the Menu Item to be enabled by using the Menu Item Id.</summary>
			///<param name=' itemid' type='<span class="param-type">string|number</span>' optional='false' >Specifies the Menu Item id to be enabled.</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'hide' : function(){
		///<signature>
			///<summary>Hides the Context Menu control.</summary>
		///</signature>
	},
	'insert' : function (item, target){
		///<signature>
			///<summary>Insert the menu item as child of target node.</summary>
			///<param name=' item' type='<span class="param-type">Object</span>' optional='false' >Information about Menu item.</param>
			///<param name=' target' type='<span class="param-type">string|Object</span>' optional='false' >Selector of target node or Object of target node.</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'insertAfter' : function (item, target){
		///<signature>
			///<summary>Insert the menu item after the target node.</summary>
			///<param name=' item' type='<span class="param-type">Object</span>' optional='false' >Information about Menu item.</param>
			///<param name=' target' type='<span class="param-type">string|Object</span>' optional='false' >Selector of target node or Object of target node.</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'insertBefore' : function (item, target){
		///<signature>
			///<summary>Insert the menu item before the target node.</summary>
			///<param name=' item' type='<span class="param-type">Object</span>' optional='false' >Information about Menu item.</param>
			///<param name=' target' type='<span class="param-type">string|Object</span>' optional='false' >Selector of target node or Object of target node.</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'remove' : function (target){
		///<signature>
			///<summary>Remove Menu item.</summary>
			///<param name=' target' type='<span class="param-type">object|array</span>' optional='false' >Selector of target node or Object of target node.</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'show' : function (locationX, locationY, targetElement, event){
		///<signature>
			///<summary>To show the Menu control.</summary>
			///<param name=' locationX' type='<span class="param-type">number</span>' optional='false' >x co-ordinate position of context menu.</param>
			///<param name=' locationY' type='<span class="param-type">number</span>' optional='false' >y co-ordinate position of context menu.</param>
			///<param name=' targetElement' type='<span class="param-type">object</span>' optional='false' >target element</param>
			///<param name=' event' type='<span class="param-type">object</span>' optional='false' >name of the event</param>
			///<returns type ='Syncfusion' />
		///</signature>
	}
});
intellisense.annotate(ej.NavigationDrawer.prototype, {
	'close' : function(){
		///<signature>
			///<summary>To close the navigation drawer control</summary>
		///</signature>
	},
	'open' : function(){
		///<signature>
			///<summary>To open the navigation drawer control</summary>
		///</signature>
	},
	'toggle' : function(){
		///<signature>
			///<summary>To Toggle the navigation drawer control</summary>
		///</signature>
	}
});
intellisense.annotate(ej..prototype, {
	'getJSONData' : function(){
		///<signature>
			///<summary>This function gets the datasource, action and grid layout for rendering the PivotGrid.</summary>
		///</signature>
	}
});
intellisense.annotate(ej.OlapChart.prototype, {
	'doAjaxPost' : function (){
		///<signature>
			///<summary>Perform an asynchronous HTTP (AJAX) request.</summary>
			///<param name='argument' type='Object' optional='false' ></param>
			///<param name='action' type='string' optional='false' ></param>
			///<param name='customObject' type='object' optional='false' ></param>
			///<param name='element' type='string' optional='false' ></param>
			///<param name='cancel' type='boolean' optional='false' ></param>
			///<param name='model' type='<ts ref="ej.olap.OlapChart.Model"/>object' optional='false' ></param>
			///<param name='type' type='string' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'doPostBack' : function (){
		///<signature>
			///<summary>Perform an asynchronous HTTP (FullPost) submit.</summary>
			///<param name='argument' type='Object' optional='false' ></param>
			///<param name='action' type='string' optional='false' ></param>
			///<param name='customObject' type='object' optional='false' ></param>
			///<param name='element' type='string' optional='false' ></param>
			///<param name='cancel' type='boolean' optional='false' ></param>
			///<param name='model' type='<ts ref="ej.olap.OlapChart.Model"/>object' optional='false' ></param>
			///<param name='type' type='string' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'exportOlapChart' : function (){
		///<signature>
			///<summary>Exports the OlapChart to an appropriate format based on the parameter passed.</summary>
			///<param name='argument' type='Object' optional='false' ></param>
			///<param name='action' type='string' optional='false' ></param>
			///<param name='customObject' type='object' optional='false' ></param>
			///<param name='element' type='string' optional='false' ></param>
			///<param name='cancel' type='boolean' optional='false' ></param>
			///<param name='model' type='<ts ref="ej.olap.OlapChart.Model"/>object' optional='false' ></param>
			///<param name='type' type='string' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'renderChartFromJSON' : function (){
		///<signature>
			///<summary>This function receives the JSON formatted datasource to render the OlapChart control.</summary>
			///<param name='argument' type='Object' optional='false' ></param>
			///<param name='action' type='string' optional='false' ></param>
			///<param name='customObject' type='object' optional='false' ></param>
			///<param name='element' type='string' optional='false' ></param>
			///<param name='cancel' type='boolean' optional='false' ></param>
			///<param name='model' type='<ts ref="ej.olap.OlapChart.Model"/>object' optional='false' ></param>
			///<param name='type' type='string' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'renderControlSuccess' : function (){
		///<signature>
			///<summary>This function receives the update from service-end, which would be utilized for rendering the widget.</summary>
			///<param name='argument' type='Object' optional='false' ></param>
			///<param name='action' type='string' optional='false' ></param>
			///<param name='customObject' type='object' optional='false' ></param>
			///<param name='element' type='string' optional='false' ></param>
			///<param name='cancel' type='boolean' optional='false' ></param>
			///<param name='model' type='<ts ref="ej.olap.OlapChart.Model"/>object' optional='false' ></param>
			///<param name='type' type='string' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	}
});
intellisense.annotate(ej.PdfViewer.prototype, {
	'goToPage' : function(){
		///<signature>
			///<summary>Navigates to the specific page in the PDF document. If the page is not available for the given pageNumber, PDF viewer retains the existing page in view. </summary>
		///</signature>
	},
	'goToLastPage' : function(){
		///<signature>
			///<summary>Navigates to the last page of the PDF document.</summary>
		///</signature>
	},
	'goToFirstPage' : function(){
		///<signature>
			///<summary>Navigates to the first page of PDF document.</summary>
		///</signature>
	},
	'goToNextPage' : function(){
		///<signature>
			///<summary>Navigates to the next page of the PDF document.</summary>
		///</signature>
	},
	'goToPreviousPage' : function(){
		///<signature>
			///<summary>Navigates to the previous page of the PDF document.</summary>
		///</signature>
	},
	'showPageNavigationTools' : function(){
		///<signature>
			///<summary>Shows/hides the page navigation tools in the toolbar</summary>
		///</signature>
	},
	'showMagnificationTools' : function(){
		///<signature>
			///<summary>Shows/hides the zoom tools in the tool bar.</summary>
		///</signature>
	},
	'showToolbar' : function(){
		///<signature>
			///<summary>Shows/hides the tool bar in the PDF viewer.</summary>
		///</signature>
	},
	'load' : function(){
		///<signature>
			///<summary>Loads the document with the filename and displays it in PDF viewer.</summary>
		///</signature>
	},
	'fitToPage' : function(){
		///<signature>
			///<summary>Scales the page to fit the page in the container in the control.</summary>
		///</signature>
	},
	'fitToWidth' : function(){
		///<signature>
			///<summary>Scales the page to fit the page width to the width of the container in the control.</summary>
		///</signature>
	},
	'zoomIn' : function(){
		///<signature>
			///<summary>Magnifies the page to the next value in the zoom drop down list.</summary>
		///</signature>
	},
	'zoomOut' : function(){
		///<signature>
			///<summary>Shrinks the page to the previous value in the magnification in the drop down list.</summary>
		///</signature>
	},
	'zoomTo' : function(){
		///<signature>
			///<summary>Scales the page to the specified percentage ranging from 50 to 400. If the given zoomValue is less than 50 or greater than 400; the PDF viewer scales the page to 50 and 400 respectively.</summary>
		///</signature>
	}
});
intellisense.annotate(ej.ProgressBar.prototype, {
	'destroy' : function(){
		///<signature>
			///<summary>Destroy the progressbar widget</summary>
		///</signature>
	},
	'disable' : function(){
		///<signature>
			///<summary>Disables the progressbar control</summary>
		///</signature>
	},
	'enable' : function(){
		///<signature>
			///<summary>Enables the progressbar control</summary>
		///</signature>
	},
	'getPercentage' : function(){
		///<signature>
			///<summary>Returns the current progress value in percent.</summary>
		///</signature>
	},
	'getValue' : function(){
		///<signature>
			///<summary>Returns the current progress value</summary>
		///</signature>
	}
});
intellisense.annotate(ej.RadioButton.prototype, {
	'disable' : function(){
		///<signature>
			///<summary>To disable the RadioButton</summary>
		///</signature>
	},
	'enable' : function(){
		///<signature>
			///<summary>To enable the RadioButton</summary>
		///</signature>
	}
});
intellisense.annotate(ej.Rating.prototype, {
	'destroy' : function(){
		///<signature>
			///<summary>Destroy the Rating widget all events bound will be unbind automatically and bring the control to pre-init state.</summary>
		///</signature>
	},
	'getValue' : function(){
		///<signature>
			///<summary>To get the current value of rating control.</summary>
		///</signature>
	},
	'hide' : function(){
		///<signature>
			///<summary>To hide the rating control.</summary>
		///</signature>
	},
	'refresh' : function(){
		///<signature>
			///<summary>User can refresh the rating control to identify changes.</summary>
		///</signature>
	},
	'reset' : function(){
		///<signature>
			///<summary>To reset the rating value.</summary>
		///</signature>
	},
	'setValue' : function (value){
		///<signature>
			///<summary>To set the rating value.</summary>
			///<param name=' value' type='<span class="param-type">string|number</span>' optional='false' >Specifies the rating value.</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'show' : function(){
		///<signature>
			///<summary>To show the rating control</summary>
		///</signature>
	}
});
intellisense.annotate(ej.Resizable.prototype, {
	'_destroy' : function(){
		///<signature>
			///<summary>destroy in the Resizable.</summary>
		///</signature>
	}
});
intellisense.annotate(ej.Ribbon.prototype, {
	'addContextualTabs' : function (contextualTabSet, index){
		///<signature>
			///<summary>Adds contextual tab or contextual tab set dynamically in the ribbon control with contextual tabs object and index position. When index is null, ribbon contextual tab or contextual tab set is added at the last index.</summary>
			///<param name='contextualTabSet' type='<span class="param-type">object</span>' optional='false' ></param>
			///<param name='index' type='<span class="param-type">number</span>' optional='true' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'addTab' : function (tabText, ribbonGroups, index){
		///<signature>
			///<summary>Adds tab dynamically in the ribbon control with given name, tab group array and index position. When index is null, ribbon tab is added at the last index.</summary>
			///<param name='tabText' type='<span class="param-type">string</span>' optional='false' ></param>
			///<param name='ribbonGroups' type='<span class="param-type">array</span>' optional='false' ></param>
			///<param name='index' type='<span class="param-type">number</span>' optional='true' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'addTabGroup' : function (tabIndex, tabGroup, groupIndex){
		///<signature>
			///<summary>Adds tab group dynamically in the ribbon control with given tab index, tab group object and group index position. When group index is null, ribbon group is added at the last index.</summary>
			///<param name='tabIndex' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='tabGroup' type='<span class="param-type">object</span>' optional='false' ></param>
			///<param name='groupIndex' type='<span class="param-type">number</span>' optional='true' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'addTabGroupContent' : function (tabIndex, groupIndex, subGroupIndex, content, contentIndex){
		///<signature>
			///<summary>Adds group content dynamically in the ribbon control with given tab index, group index, sub group index, content and content index position. When content index is null, content is added at the last index.</summary>
			///<param name='tabIndex' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='groupIndex' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='subGroupIndex' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='content' type='<span class="param-type">object</span>' optional='true' ></param>
			///<param name='contentIndex' type='<span class="param-type">number</span>' optional='true' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'hideBackstage' : function(){
		///<signature>
			///<summary>Hides the ribbon backstage page.</summary>
		///</signature>
	},
	'collapse' : function(){
		///<signature>
			///<summary>Collapses the ribbon tab content.</summary>
		///</signature>
	},
	'destroy' : function(){
		///<signature>
			///<summary>Destroys the ribbon widget. All the events bound using this._on are unbound automatically and the ribbon control is moved to pre-init state.</summary>
		///</signature>
	},
	'expand' : function(){
		///<signature>
			///<summary>Expands the ribbon tab content.</summary>
		///</signature>
	},
	'getTabText' : function (index){
		///<signature>
			///<summary>Gets text of the given index tab in the ribbon control.</summary>
			///<param name='index' type='<span class="param-type">number</span>' optional='false' ></param>
			///<returns type ='' />
		///</signature>
	},
	'hideTab' : function (string){
		///<signature>
			///<summary>Hides the given text tab in the ribbon control.</summary>
			///<param name='string' type='<span class="param-type">string</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'isEnable' : function (string){
		///<signature>
			///<summary>Checks whether the given text tab in the ribbon control is enabled or not.</summary>
			///<param name='string' type='<span class="param-type">string</span>' optional='false' ></param>
			///<returns type ='' />
		///</signature>
	},
	'isVisible' : function (string){
		///<signature>
			///<summary>Checks whether the given text tab in the ribbon control is visible or not.</summary>
			///<param name='string' type='<span class="param-type">string</span>' optional='false' ></param>
			///<returns type ='' />
		///</signature>
	},
	'removeTab' : function (index){
		///<signature>
			///<summary>Removes the given index tab item from the ribbon control.</summary>
			///<param name='index' type='<span class="param-type">number</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'setTabText' : function (tabText, newText){
		///<signature>
			///<summary>Sets new text to the given text tab in the ribbon control.</summary>
			///<param name='tabText' type='<span class="param-type">string</span>' optional='false' ></param>
			///<param name='newText' type='<span class="param-type">string</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'showBackstage' : function(){
		///<signature>
			///<summary>Displays the ribbon backstage page.</summary>
		///</signature>
	},
	'showTab' : function (string){
		///<signature>
			///<summary>Displays the given text tab in the ribbon control.</summary>
			///<param name='string' type='<span class="param-type">string</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	}
});
intellisense.annotate(ej.Rotator.prototype, {
	'disable' : function(){
		///<signature>
			///<summary>Disables the Rotator control.</summary>
		///</signature>
	},
	'enable' : function(){
		///<signature>
			///<summary>Enables the Rotator control.</summary>
		///</signature>
	},
	'getIndex' : function(){
		///<signature>
			///<summary>This method is used to get the current slide index.</summary>
		///</signature>
	},
	'gotoIndex' : function (index){
		///<signature>
			///<summary>This method is used to move a slide to the specified index.</summary>
			///<param name='{% highlight html %} index{% endhighlight %}' type='<span class="param-type">number</span>' optional='false' >index of an slide</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'pause' : function(){
		///<signature>
			///<summary>This method is used to pause autoplay.</summary>
		///</signature>
	},
	'play' : function(){
		///<signature>
			///<summary>This method is used to move slides continuously (or start autoplay) in the specified autoplay direction.</summary>
		///</signature>
	},
	'slideNext' : function(){
		///<signature>
			///<summary>This method is used to move to the next slide from the current slide. If the current slide is the last slide, then the first slide will be treated as the next slide.</summary>
		///</signature>
	},
	'slidePrevious' : function(){
		///<signature>
			///<summary>This method is used to move to the previous slide from the current slide. If the current slide is the first slide, then the last slide will be treated as the previous slide.</summary>
		///</signature>
	}
});
intellisense.annotate(ej.RTE.prototype, {
	'createRange' : function(){
		///<signature>
			///<summary>Returns the range object.</summary>
		///</signature>
	},
	'disable' : function(){
		///<signature>
			///<summary>Disables the RTE control.</summary>
		///</signature>
	},
	'disableToolbarItem' : function(){
		///<signature>
			///<summary>Disables the corresponding tool in the RTE ToolBar.</summary>
		///</signature>
	},
	'enable' : function(){
		///<signature>
			///<summary>Enables the RTE control.</summary>
		///</signature>
	},
	'enableToolbarItem' : function(){
		///<signature>
			///<summary>Enables the corresponding tool in the toolbar when the tool is disabled.</summary>
		///</signature>
	},
	'executeCommand' : function(){
		///<signature>
			///<summary>Performs the action value based on the given command. </summary>
		///</signature>
	},
	'focus' : function(){
		///<signature>
			///<summary>Focuses the RTE control.</summary>
		///</signature>
	},
	'getCommandStatus' : function(){
		///<signature>
			///<summary>Gets the command status of the selected text based on the given comment in the RTE control.</summary>
		///</signature>
	},
	'getDocument' : function(){
		///<signature>
			///<summary>Gets the HTML string from the RTE control.</summary>
		///</signature>
	},
	'getHtml' : function(){
		///<signature>
			///<summary>Gets the HTML string from the RTE control.</summary>
		///</signature>
	},
	'getSelectedHtml' : function(){
		///<signature>
			///<summary>Gets the selected html string from the RTE control.</summary>
		///</signature>
	},
	'getText' : function(){
		///<signature>
			///<summary>Gets the content as string from the RTE control.</summary>
		///</signature>
	},
	'hide' : function(){
		///<signature>
			///<summary>Hides the RTE control.</summary>
		///</signature>
	},
	'insertMenuOption' : function (){
		///<signature>
			///<summary>Inserts new item to the target contextmenu node. </summary>
			///<param name=' option ' type='<span class="param-type">object</span>' optional='false' > Object data’s for inserting the new item to the context menu. <table class="params"> <thead> <tr> <th>Name</th> <th>Type</th> <th>Description</th> </tr></param>
			///<param name=' newItem ' type='<span class="param-type">string</span>' optional='false' > Target menu item text. </param>
			///<param name=' targetItem ' type='<span class="param-type">string</span>' optional='false' > Target menu item text </param>
			///<param name=' insertType ' type='<span class="param-type">string </span>' optional='false' > Menu item insertion type - insert||insertAfter||insertBefore”. </param>
			///<param name=' menuType ' type='<span class="param-type">object</span>' optional='false' > menu visibility types. - text:boolean, image: boolean, hyperlink: boolean, table: boolean </param>
			///<param name=' spriteCssClass ' type='<span class="param-type">string</span>' optional='false' > Sprite css class name for menu item icon. </param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'pasteContent' : function(){
		///<signature>
			///<summary>This method helps to insert/paste the content at the current cursor (caret) position or the selected content to be replaced with our text by passing the value as parameter to the pasteContent method in the Editor.</summary>
		///</signature>
	},
	'refresh' : function(){
		///<signature>
			///<summary>Refreshes the RTE control.</summary>
		///</signature>
	},
	'removeMenuOption ' : function (){
		///<signature>
			///<summary>Removes the target menu item from the RTE contextmenu.</summary>
			///<param name=' option ' type='<span class="param-type">string</span>' optional='false' > Target Node text. </param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'removeToolbarItem' : function(){
		///<signature>
			///<summary>Removes the given tool from the RTE Toolbar.</summary>
		///</signature>
	},
	'selectAll' : function(){
		///<signature>
			///<summary>Selects all the contents within the RTE.</summary>
		///</signature>
	},
	'selectRange' : function(){
		///<signature>
			///<summary>Selects the contents in the given range.</summary>
		///</signature>
	},
	'setColorPickerType' : function(){
		///<signature>
			///<summary>Sets the color picker model type rendered initially in the RTE control.</summary>
		///</signature>
	},
	'setHtml' : function(){
		///<signature>
			///<summary>Sets the HTML string from the RTE control.</summary>
		///</signature>
	},
	'show' : function(){
		///<signature>
			///<summary>Displays the RTE control.</summary>
		///</signature>
	}
});
intellisense.annotate(ej.Schedule.prototype, {
	'deleteAppointment' : function (data){
		///<signature>
			///<summary>This method is used to delete the appointment based on the guid value or the appointment data passed to it.</summary>
			///<param name='data' type='string|object' optional='false' >GUID value of an appointment element or an appointment object</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'destroy' : function(){
		///<signature>
			///<summary>Destroys the Schedule widget. All the events bound using this._on are unbound automatically and the control is moved to pre-init state.</summary>
		///</signature>
	},
	'exportSchedule' : function (action, serverEvent, id){
		///<signature>
			///<summary>Exports the appointments from the Schedule control.</summary>
			///<param name='action' type='string' optional='false' >It refers the controller action name to redirect. (For MVC)</param>
			///<param name='serverEvent' type='string' optional='false' >It refers the server event name.(For ASP)</param>
			///<param name='id' type='string|number' optional='false' >Pass the id of an appointment, in case if a single appointment needs to be exported. Otherwise, it takes the null value.</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'filterAppointments' : function (filterConditions){
		///<signature>
			///<summary>Searches the appointments from appointment list of Schedule control.</summary>
			///<param name='filterConditions' type='array' optional='false' >Holds array of one or more conditional objects for filtering the appointments based on it.</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'getAppointments' : function(){
		///<signature>
			///<summary>Gets the appointment list of Schedule control.</summary>
		///</signature>
	},
	'print' : function(){
		///<signature>
			///<summary>Prints the Scheduler.</summary>
		///</signature>
	},
	'refreshScroller' : function(){
		///<signature>
			///<summary>Refreshes the Scroller within Scheduler while using it with some other controls or application.</summary>
		///</signature>
	},
	'saveAppointment' : function (appointmentObject){
		///<signature>
			///<summary>It is used to save the appointment. The appointment obj is based on the argument passed along with this method.</summary>
			///<param name='appointmentObject' type='object' optional='false' >appointment object which includes appointment details</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'getSlotByElement' : function (element){
		///<signature>
			///<summary>Retrieves the time slot information (start/end time and resource details) of the given element. The parameter is optional - as when no element is passed to it, the currently selected cell information will be retrieved. When multiple cells are selected in the Scheduler, it is not necessary to provide the parameter.</summary>
			///<param name='element' type='object' optional='false' >TD element object rendered as Scheduler work cell</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'searchAppointments' : function (searchString, field, operator, ignoreCase){
		///<signature>
			///<summary>Searches the appointments from the appointment list of Schedule control.</summary>
			///<param name='searchString' type='object|string' optional='false' >Defines the search word or the filter condition, based on which the appointments are filtered from the list.</param>
			///<param name='field' type='string' optional='false' >Defines the field name on which the search is to be made.</param>
			///<param name='operator' type='enum|string' optional='false' >Defines the filterOperator value for the search operation.</param>
			///<param name='ignoreCase' type='boolean' optional='false' >Defines the ignoreCase value for performing the search operation.</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'refresh' : function(){
		///<signature>
			///<summary>To refresh the Schedule control.</summary>
		///</signature>
	},
	'refreshAppointment' : function(){
		///<signature>
			///<summary>Refreshes only the appointments within the Schedule control.</summary>
		///</signature>
	}
});
intellisense.annotate(ej.Scroller.prototype, {
	'destroy' : function(){
		///<signature>
			///<summary>destroy the Scroller control, unbind the all ej control related events automatically and bring the control to pre-init state.</summary>
		///</signature>
	},
	'disable' : function(){
		///<signature>
			///<summary>User disables the Scroller control at any time.</summary>
		///</signature>
	},
	'enable' : function(){
		///<signature>
			///<summary>User enables the Scroller control at any time.</summary>
		///</signature>
	},
	'isHScroll' : function(){
		///<signature>
			///<summary>Returns true if horizontal scrollbar is shown, else return false.</summary>
		///</signature>
	},
	'isVScroll' : function(){
		///<signature>
			///<summary>Returns true if vertical scrollbar is shown, else return false.</summary>
		///</signature>
	},
	'refresh' : function(){
		///<signature>
			///<summary>User refreshes the Scroller control at any time.</summary>
		///</signature>
	},
	'scrollX' : function(){
		///<signature>
			///<summary>Scroller moves to given pixel in X (left) position. We can also specify the animation speed,in which the scroller has to move while re-positioning it.</summary>
		///</signature>
	},
	'scrollY' : function(){
		///<signature>
			///<summary>Scroller moves to given pixel in Y (top) position. We can also specify the animation speed,in which the scroller has to move while re-positioning it.</summary>
		///</signature>
	}
});
intellisense.annotate(ej.Slider.prototype, {
	'disable' : function(){
		///<signature>
			///<summary>To disable the slider</summary>
		///</signature>
	},
	'enable' : function(){
		///<signature>
			///<summary>To enable the slider</summary>
		///</signature>
	},
	'getValue' : function(){
		///<signature>
			///<summary>To get value from slider handle</summary>
		///</signature>
	},
	'setValue' : function(){
		///<signature>
			///<summary>To set value to slider handle</summary>
		///</signature>
	}
});
intellisense.annotate(ej.SplitButton.prototype, {
	'destroy' : function(){
		///<signature>
			///<summary>destroy the split button widget all events bound using this._on will be unbind automatically and bring the control to pre-init state.</summary>
		///</signature>
	},
	'disable' : function(){
		///<signature>
			///<summary>To disable the split button</summary>
		///</signature>
	},
	'enable' : function(){
		///<signature>
			///<summary>To Enable the split button</summary>
		///</signature>
	},
	'hide' : function(){
		///<signature>
			///<summary>To Hide the list content of the split button.</summary>
		///</signature>
	},
	'show' : function(){
		///<signature>
			///<summary>To show the list content of the split button.</summary>
		///</signature>
	}
});
intellisense.annotate(ej.Splitter.prototype, {
	'addItem' : function (content, property, index){
		///<signature>
			///<summary>To add a new pane to splitter control.</summary>
			///<param name=' content' type='<span class="param-type">string</span>' optional='false' >content of pane.</param>
			///<param name=' property' type='<span class="param-type">object</span>' optional='false' >pane properties.</param>
			///<param name=' index' type='<span class="param-type">number</span>' optional='false' >index of pane.</param>
			///<returns type ='' />
		///</signature>
	},
	'collapse' : function (paneIndex){
		///<signature>
			///<summary>To collapse the splitter control pane.</summary>
			///<param name=' paneIndex' type='<span class="param-type">number</span>' optional='false' >index number of pane.</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'expand' : function (paneIndex){
		///<signature>
			///<summary>To expand the splitter control pane.</summary>
			///<param name=' paneIndex' type='<span class="param-type">number</span>' optional='false' >index number of pane.</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'refresh' : function(){
		///<signature>
			///<summary>To refresh the splitter control pane resizing.</summary>
		///</signature>
	},
	'removeItem' : function (index){
		///<signature>
			///<summary>To remove a specified pane from the splitter control.</summary>
			///<param name=' index' type='<span class="param-type">number</span>' optional='false' >index of pane.</param>
			///<returns type ='Syncfusion' />
		///</signature>
	}
});
intellisense.annotate(ej.Tab.prototype, {
	'addItem' : function (url, displayLabel, index, cssClass, id){
		///<signature>
			///<summary>Add new tab items with given name, url and given index position, if index null it&rsquo;s add last item.</summary>
			///<param name=' url' type='<span class="param-type">string</span>' optional='false' >URL name / tab id.</param>
			///<param name=' displayLabel' type='<span class="param-type">string</span>' optional='false' >Tab Display name.</param>
			///<param name=' index' type='<span class="param-type">number</span>' optional='false' >Index position to placed , this is optional.</param>
			///<param name=' cssClass' type='<span class="param-type">string</span>' optional='false' >specifies cssClass, this is optional.</param>
			///<param name=' id' type='<span class="param-type">string</span>' optional='false' >specifies id of tab, this is optional.</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'disable' : function(){
		///<signature>
			///<summary>To disable the tab control.</summary>
		///</signature>
	},
	'enable' : function(){
		///<signature>
			///<summary>To enable the tab control.</summary>
		///</signature>
	},
	'getItemsCount' : function(){
		///<signature>
			///<summary>This function get the number of tab rendered</summary>
		///</signature>
	},
	'hide' : function(){
		///<signature>
			///<summary>This function hides the tab control.</summary>
		///</signature>
	},
	'hideItem' : function (index){
		///<signature>
			///<summary>This function hides the specified item tab in tab control.</summary>
			///<param name=' index' type='<span class="param-type">number</span>' optional='false' >index of tab item.</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'removeItem' : function (index){
		///<signature>
			///<summary>Remove the given index tab item.</summary>
			///<param name=' index' type='<span class="param-type">number</span>' optional='false' >index of tab item.</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'show' : function(){
		///<signature>
			///<summary>This function is to show the tab control.</summary>
		///</signature>
	},
	'showItem' : function (index){
		///<signature>
			///<summary>This function helps to show the specified hidden tab item in tab control.</summary>
			///<param name=' index' type='<span class="param-type">number</span>' optional='false' >index of tab item.</param>
			///<returns type ='Syncfusion' />
		///</signature>
	}
});
intellisense.annotate(ej.TagCloud.prototype, {
	'insert' : function (name){
		///<signature>
			///<summary>Inserts a new item into the TagCloud</summary>
			///<param name=' name' type=' string' optional='false' >Insert new item into the TagCloud</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'insertAt' : function (name,position){
		///<signature>
			///<summary>Inserts a new item into the TagCloud at a particular position.</summary>
			///<param name=' name' type=' string' optional='false' >Inserts a new item into the TagCloud</param>
			///<param name=' position' type=' number' optional='false' >Inserts a new item into the TagCloud with the specified position</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'remove' : function (name){
		///<signature>
			///<summary>Removes the item from the TagCloud based on the name. It removes all the tags which have the corresponding name</summary>
			///<param name=' name' type='<span class="param-type">string</span>' optional='false' >name of the tag.</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'removeAt' : function (position){
		///<signature>
			///<summary>Removes the item from the TagCloud based on the position. It removes the tags from the the corresponding position only.</summary>
			///<param name=' position' type='<span class="param-type">number</span>' optional='false' >position of tag item.</param>
			///<returns type ='Syncfusion' />
		///</signature>
	}
});
intellisense.annotate(ej.Tile.prototype, {
	'updateTemplate' : function (name){
		///<signature>
			///<summary>Update the image template of tile item to another one.</summary>
			///<param name=' name' type=' string' optional='false' >UpdateTemplate by using id</param>
			///<returns type ='Syncfusion' />
		///</signature>
	}
});
intellisense.annotate(ej.TimePicker.prototype, {
	'disable' : function(){
		///<signature>
			///<summary>Allows you to disable the TimePicker. </summary>
		///</signature>
	},
	'enable' : function(){
		///<signature>
			///<summary>Allows you to enable the TimePicker. </summary>
		///</signature>
	},
	'getValue' : function(){
		///<signature>
			///<summary>It returns the current time value.</summary>
		///</signature>
	},
	'hide' : function(){
		///<signature>
			///<summary>This method will hide the TimePicker control popup.</summary>
		///</signature>
	},
	'setCurrentTime' : function(){
		///<signature>
			///<summary>Updates the current system time in TimePicker.</summary>
		///</signature>
	},
	'show' : function(){
		///<signature>
			///<summary>This method will show the TimePicker control popup.</summary>
		///</signature>
	}
});
intellisense.annotate(ej.ToggleButton.prototype, {
	'destroy' : function(){
		///<signature>
			///<summary>Allows you to destroy the ToggleButton widget.</summary>
		///</signature>
	},
	'disable' : function(){
		///<signature>
			///<summary>To disable the ToggleButton to prevent all user interactions.</summary>
		///</signature>
	},
	'enable' : function(){
		///<signature>
			///<summary>To enable the ToggleButton.</summary>
		///</signature>
	}
});
intellisense.annotate(ej.Toolbar.prototype, {
	'deselectItem' : function (element){
		///<signature>
			///<summary>Deselect the specified Toolbar item.</summary>
			///<param name=' element' type='<span class="param-type">object</span>' optional='false' >The element need to be deselected</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'deselectItemByID' : function (ID){
		///<signature>
			///<summary>Deselect the Toolbar item based on specified id.</summary>
			///<param name=' ID' type='<span class="param-type">string</span>' optional='false' >The ID of the element need to be deselected</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'destroy' : function(){
		///<signature>
			///<summary>Allows you to destroy the Toolbar widget.</summary>
		///</signature>
	},
	'disable' : function(){
		///<signature>
			///<summary>To disable all items in the Toolbar control.</summary>
		///</signature>
	},
	'disableItem' : function (element){
		///<signature>
			///<summary>Disable the specified Toolbar item. </summary>
			///<param name=' element' type='<span class="param-type">object</span>' optional='false' >The element need to be disabled</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'disableItemByID' : function (ID){
		///<signature>
			///<summary>Disable the Toolbar item based on specified item id in the Toolbar.</summary>
			///<param name=' ID' type='<span class="param-type">string</span>' optional='false' >The ID of the element need to be disabled</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'enable' : function(){
		///<signature>
			///<summary>Enable the Toolbar if it is in disabled state.</summary>
		///</signature>
	},
	'enableItem' : function (element){
		///<signature>
			///<summary>Enable the Toolbar item based on specified item.</summary>
			///<param name=' element' type='<span class="param-type">object</span>' optional='false' >The element need to be enabled</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'enableItemByID' : function (ID){
		///<signature>
			///<summary>Enable the Toolbar item based on specified item id in the Toolbar.</summary>
			///<param name=' ID' type='<span class="param-type">string</span>' optional='false' >The ID of the element need to be enabled</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'hide' : function(){
		///<signature>
			///<summary>To hide the Toolbar</summary>
		///</signature>
	},
	'removeItem' : function (element){
		///<signature>
			///<summary>Remove the item from toolbar, based on specified item. </summary>
			///<param name=' element' type='<span class="param-type">object</span>' optional='false' >The element need to be removed</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'removeItemByID' : function (ID){
		///<signature>
			///<summary>Remove the item from toolbar, based on specified item id in the Toolbar.</summary>
			///<param name=' ID' type='<span class="param-type">string</span>' optional='false' >The ID of the element need to be removed</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'selectItem' : function (element){
		///<signature>
			///<summary>Selects the item from toolbar, based on specified item.</summary>
			///<param name=' element' type='<span class="param-type">object</span>' optional='false' >The element need to be selected</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'selectItemByID' : function (ID){
		///<signature>
			///<summary>Selects the item from toolbar, based on specified item id in the Toolbar.</summary>
			///<param name=' ID' type='<span class="param-type">string</span>' optional='false' >The ID of the element need to be selected</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'show' : function(){
		///<signature>
			///<summary>To show the Toolbar.</summary>
		///</signature>
	}
});
intellisense.annotate(ej.TreeGrid.prototype, {
	'clearSelection' : function (index){
		///<signature>
			///<summary>To clear all the selection in TreeGrid</summary>
			///<param name='index' type='number' optional='false' >you can pass a row index to clear the row selection.</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'collapseAll' : function(){
		///<signature>
			///<summary>To collapse all the parent items in tree grid</summary>
		///</signature>
	},
	'hideColumn' : function (headerText){
		///<signature>
			///<summary>To hide the column by using header text</summary>
			///<param name='headerText' type='string' optional='false' >you can pass a header text of a column to hide.</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'refresh' : function (dataSource, query){
		///<signature>
			///<summary>To refresh the changes in tree grid</summary>
			///<param name='dataSource' type='array' optional='false' >Pass which data source you want to show in tree grid</param>
			///<param name='query' type='object' optional='false' >Pass which data you want to show in tree grid</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'freezePrecedingColumns ' : function (field){
		///<signature>
			///<summary>Freeze all the columns preceding to the column specified by the field name.</summary>
			///<param name='field' type='string' optional='false' >Freeze all Columns before this field column.</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'freezeColumn ' : function (field, isFrozen){
		///<signature>
			///<summary>Freeze/unfreeze the specified column.</summary>
			///<param name='field' type='string' optional='false' >Freeze/Unfreeze this field column.</param>
			///<param name='isFrozen' type='boolean' optional='false' >Decides to Freeze/Unfreeze this field column.</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'saveCell' : function(){
		///<signature>
			///<summary>To save the edited cell in TreeGrid</summary>
		///</signature>
	},
	'search' : function (searchString){
		///<signature>
			///<summary>To search an item with search string provided at the run time</summary>
			///<param name='searchString' type='string' optional='false' >you can pass a searchString to search the tree grid</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'showColumn' : function (headerText){
		///<signature>
			///<summary>To show the column by using header text</summary>
			///<param name='headerText' type='string' optional='false' >you can pass a header text of a column to show.</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'sortColumn' : function (columnName, columnSortDirection){
		///<signature>
			///<summary>To sorting the data based on the particular fields</summary>
			///<param name='columnName' type='string' optional='false' >you can pass a name of column to sort.</param>
			///<param name='columnSortDirection' type='string' optional='false' >you can pass a sort direction to sort the column.</param>
			///<returns type ='Syncfusion' />
		///</signature>
	}
});
intellisense.annotate(ej.TreeView.prototype, {
	'addNode' : function (newNodeText, target){
		///<signature>
			///<summary>To add a Node or collection of nodes in TreeView. If target tree node is specified, then the given nodes are added as child of target tree node, otherwise nodes are added in TreeView.  </summary>
			///<param name=' newNodeText' type='<span class="param-type">string|object</span>' optional='false' >New node text or JSON object</param>
			///<param name=' target' type='<span class="param-type">string|object</span>' optional='false' >ID of TreeView node/object of TreeView node</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'addNodes' : function (collection, target){
		///<signature>
			///<summary>To add a collection of nodes in TreeView. If target tree node is specified, then the given nodes are added as child of target tree node, otherwise nodes are added in TreeView.  </summary>
			///<param name=' collection' type='<span class="param-type">object|Array</span>' optional='false' >New node details in JSON object</param>
			///<param name=' target ' type='<span class="param-type">string|object</span>' optional='false' >ID of TreeView node/object of TreeView node</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'checkAll' : function(){
		///<signature>
			///<summary>To check all the nodes in TreeView.</summary>
		///</signature>
	},
	'checkNode' : function (element){
		///<signature>
			///<summary>To check a node in TreeView.</summary>
			///<param name=' element ' type='<span class="param-type">string|object</span>' optional='false' >ID of TreeView node/object of TreeView node</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'collapseAll' : function(){
		///<signature>
			///<summary>To collapse all the TreeView nodes.</summary>
		///</signature>
	},
	'collapseNode' : function (element){
		///<signature>
			///<summary>To collapse a particular node in TreeView.</summary>
			///<param name=' element ' type='<span class="param-type">string|object</span>' optional='false' >ID of TreeView node|object of TreeView node</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'disableNode' : function (element){
		///<signature>
			///<summary>To disable the node in the TreeView.</summary>
			///<param name=' element ' type='<span class="param-type">string|object</span>' optional='false' >ID of TreeView node/object of TreeView node</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'enableNode' : function (element){
		///<signature>
			///<summary>To enable the node in the TreeView.</summary>
			///<param name=' element ' type='<span class="param-type">string|object</span>' optional='false' >ID of TreeView node/object of TreeView node</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'ensureVisible' : function (element){
		///<signature>
			///<summary>To ensure that the TreeView node is visible in the TreeView. This method is useful if we need select a TreeView node dynamically.</summary>
			///<param name=' element ' type='<span class="param-type">string|object</span>' optional='false' >ID of TreeView node/object of TreeView node</param>
			///<returns type ='' />
		///</signature>
	},
	'expandAll' : function(){
		///<signature>
			///<summary>To expand all the TreeView nodes.</summary>
		///</signature>
	},
	'expandNode' : function (element){
		///<signature>
			///<summary>To expandNode particular node in TreeView.</summary>
			///<param name=' element ' type='<span class="param-type">string|object</span>' optional='false' >ID of TreeView node/object of TreeView node</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'getCheckedNodes' : function(){
		///<signature>
			///<summary>To get currently checked nodes in TreeView.</summary>
		///</signature>
	},
	'getCheckedNodesIndex' : function(){
		///<signature>
			///<summary>To get currently checked nodes indexes in TreeView.</summary>
		///</signature>
	},
	'getNodeCount' : function(){
		///<signature>
			///<summary>To get number of nodes in TreeView.</summary>
		///</signature>
	},
	'getExpandedNodes' : function(){
		///<signature>
			///<summary>To get currently expanded nodes in TreeView.</summary>
		///</signature>
	},
	'getExpandedNodesIndex' : function(){
		///<signature>
			///<summary>To get currently expanded nodes indexes in TreeView.</summary>
		///</signature>
	},
	'getNodeByIndex' : function (index){
		///<signature>
			///<summary>To get TreeView node by using index position in TreeView.</summary>
			///<param name=' index ' type='<span class="param-type">number</span>' optional='false' >Index position of TreeView node</param>
			///<returns type ='' />
		///</signature>
	},
	'getNode' : function (element){
		///<signature>
			///<summary>To get TreeView node data such as id, text, parentId, selected, checked, expanded, level, childs and index.</summary>
			///<param name=' element' type='<span class="param-type">string/object</span>' optional='false' >ID of TreeView node/object of TreeView node</param>
			///<returns type ='' />
		///</signature>
	},
	'getNodeIndex' : function (element){
		///<signature>
			///<summary>To get current index position of TreeView node.</summary>
			///<param name=' element ' type='<span class="param-type">string/object</span>' optional='false' >ID of TreeView node/object of TreeView node</param>
			///<returns type ='' />
		///</signature>
	},
	'getParent' : function (element){
		///<signature>
			///<summary>To get immediate parent TreeView node of particular TreeView node.</summary>
			///<param name=' element ' type='<span class="param-type">string/object</span>' optional='false' >ID of TreeView node/object of TreeView node</param>
			///<returns type ='' />
		///</signature>
	},
	'getSelectedNode' : function(){
		///<signature>
			///<summary>To get the currently selected node in TreeView.</summary>
		///</signature>
	},
	'getSelectedNodeIndex' : function(){
		///<signature>
			///<summary>To get the index position of currently selected node in TreeView.</summary>
		///</signature>
	},
	'getText' : function (element){
		///<signature>
			///<summary>To get the text of a node in TreeView.</summary>
			///<param name=' element ' type='<span class="param-type">string|object</span>' optional='false' >ID of TreeView node/object of TreeView node</param>
			///<returns type ='' />
		///</signature>
	},
	'getTreeData' : function(){
		///<signature>
			///<summary>To get the updated datasource of TreeView after performing some operation like drag and drop, node editing, adding and removing node.</summary>
		///</signature>
	},
	'getVisibleNodes' : function(){
		///<signature>
			///<summary>To get currently visible nodes in TreeView.</summary>
		///</signature>
	},
	'hasChildNode' : function (element){
		///<signature>
			///<summary>To check a node having child or not.</summary>
			///<param name=' element ' type='<span class="param-type">string|object</span>' optional='false' >ID of TreeView node/object of TreeView node</param>
			///<returns type ='' />
		///</signature>
	},
	'hide' : function(){
		///<signature>
			///<summary>To show nodes in TreeView.</summary>
		///</signature>
	},
	'hideNode' : function (element){
		///<signature>
			///<summary>To hide particular node in TreeView.</summary>
			///<param name=' element ' type='<span class="param-type">string|object</span>' optional='false' >ID of TreeView node/object of TreeView node</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'insertAfter' : function (newNodeText, target){
		///<signature>
			///<summary>To add a Node or collection of nodes after the particular TreeView node.  </summary>
			///<param name=' newNodeText ' type='<span class="param-type">string|object</span>' optional='false' >New node text or JSON object</param>
			///<param name=' target ' type='<span class="param-type">string|object</span>' optional='false' >ID of TreeView node/object of TreeView node</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'insertBefore' : function (newNodeText, target){
		///<signature>
			///<summary>To add a Node or collection of nodes before the particular TreeView node.  </summary>
			///<param name=' newNodeText ' type='<span class="param-type">string|object</span>' optional='false' >New node text or JSON object</param>
			///<param name=' target ' type='<span class="param-type">string|object</span>' optional='false' >ID of TreeView node/object of TreeView node</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'isNodeChecked' : function (element){
		///<signature>
			///<summary>To check the given TreeView node is checked or unchecked.</summary>
			///<param name=' element ' type='<span class="param-type">string|object</span>' optional='false' >ID of TreeView node/object of TreeView node</param>
			///<returns type ='' />
		///</signature>
	},
	'isChildLoaded' : function (element){
		///<signature>
			///<summary>To check whether the child nodes are loaded of the given TreeView node.</summary>
			///<param name=' element ' type='<span class="param-type">string|object</span>' optional='false' >ID of TreeView node/object of TreeView node</param>
			///<returns type ='' />
		///</signature>
	},
	'isDisabled' : function (element){
		///<signature>
			///<summary>To check the given TreeView node is disabled or enabled.</summary>
			///<param name=' element ' type='<span class="param-type">string|object</span>' optional='false' >ID of TreeView node/object of TreeView node</param>
			///<returns type ='' />
		///</signature>
	},
	'isExist' : function (element){
		///<signature>
			///<summary>To check the given node is exist in TreeView.</summary>
			///<param name=' element ' type='<span class="param-type">string|object</span>' optional='false' >ID of TreeView node/object of TreeView node</param>
			///<returns type ='' />
		///</signature>
	},
	'isExpanded' : function (element){
		///<signature>
			///<summary>To get the expand status of the given TreeView node.</summary>
			///<param name=' element ' type='<span class="param-type">string|object</span>' optional='false' >ID of TreeView node/object of TreeView node</param>
			///<returns type ='' />
		///</signature>
	},
	'isSelected' : function (element){
		///<signature>
			///<summary>To get the select status of the given TreeView node.</summary>
			///<param name=' element ' type='<span class="param-type">string|object</span>' optional='false' >ID of TreeView node/object of TreeView node</param>
			///<returns type ='' />
		///</signature>
	},
	'isVisible' : function (element){
		///<signature>
			///<summary>To get the visibility status of the given TreeView node.</summary>
			///<param name=' element ' type='<span class="param-type">string|object</span>' optional='false' >ID of TreeView node/object of TreeView node</param>
			///<returns type ='' />
		///</signature>
	},
	'loadData' : function (newNodeText, target){
		///<signature>
			///<summary>To load the TreeView nodes from the particular URL. If target tree node is specified, then the given nodes are added as child of target tree node, otherwise nodes are added in TreeView.  </summary>
			///<param name=' URL ' type='<span class="param-type">string</span>' optional='false' >URL location, the data returned from the URL will be loaded in TreeView</param>
			///<param name=' target ' type='<span class="param-type">string|object</span>' optional='false' >ID of TreeView node/object of TreeView node</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'moveNode' : function (sourceNode, destionationNode, index){
		///<signature>
			///<summary>To move the TreeView node with in same TreeView. The new poistion of given TreeView node will be based on destionation node and index position.  </summary>
			///<param name=' sourceNode ' type='<span class="param-type">string|object</span>' optional='false' >ID of TreeView node/object of TreeView node</param>
			///<param name=' destinationNode ' type='<span class="param-type">string|object</span>' optional='false' >ID of TreeView node/object of TreeView node</param>
			///<param name=' index ' type='<span class="param-type">number</span>' optional='false' >New index position of given source node</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'refresh' : function(){
		///<signature>
			///<summary>To refresh the TreeView</summary>
		///</signature>
	},
	'removeAll' : function(){
		///<signature>
			///<summary>To remove all the nodes in TreeView.</summary>
		///</signature>
	},
	'removeNode' : function (element){
		///<signature>
			///<summary>To remove a node in TreeView.</summary>
			///<param name=' element ' type='<span class="param-type">string|object</span>' optional='false' >ID of TreeView node/object of TreeView node</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'selectNode' : function (element){
		///<signature>
			///<summary>To select a node in TreeView.</summary>
			///<param name=' element ' type='<span class="param-type">string|object</span>' optional='false' >ID of TreeView node/object of TreeView node</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'show' : function(){
		///<signature>
			///<summary>To show nodes in TreeView.</summary>
		///</signature>
	},
	'showNode' : function (element){
		///<signature>
			///<summary>To show a node in TreeView.</summary>
			///<param name=' element ' type='<span class="param-type">string|object</span>' optional='false' >ID of TreeView node/object of TreeView node</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'unCheckAll' : function(){
		///<signature>
			///<summary>To uncheck all the nodes in TreeView.</summary>
		///</signature>
	},
	'uncheckNode' : function (element){
		///<signature>
			///<summary>To uncheck a node in TreeView.</summary>
			///<param name=' element ' type='<span class="param-type">string|object</span>' optional='false' >ID of TreeView node/object of TreeView node</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'unselectNode' : function (element){
		///<signature>
			///<summary>To unselect the node in the TreeView.</summary>
			///<param name=' element ' type='<span class="param-type">string|object</span>' optional='false' >ID of TreeView node/object of TreeView node</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'updateText' : function (target, newText){
		///<signature>
			///<summary>To edit or update the text of the TreeView node.  </summary>
			///<param name=' target ' type='<span class="param-type">string|object</span>' optional='false' >ID of TreeView node/object of TreeView node</param>
			///<param name=' newText ' type='<span class="param-type">string</span>' optional='false' >New text</param>
			///<returns type ='Syncfusion' />
		///</signature>
	}
});
intellisense.annotate(ej.Uploadbox.prototype, {
	'destroy' : function(){
		///<signature>
			///<summary>The destroy method destroys the control and brings the control to a pre-init state. All the events of the Upload control is bound by using this._on unbinds automatically.  </summary>
		///</signature>
	},
	'disable' : function(){
		///<signature>
			///<summary>Disables the Uploadbox control</summary>
		///</signature>
	},
	'enable' : function(){
		///<signature>
			///<summary>Enables the Uploadbox control</summary>
		///</signature>
	}
});
intellisense.annotate(ej.WaitingPopup.prototype, {
	'hide' : function(){
		///<signature>
			///<summary>To hide the waiting popup</summary>
		///</signature>
	},
	'refresh' : function(){
		///<signature>
			///<summary>Refreshes the WaitingPopup control by resetting the pop-up panel position and content position</summary>
		///</signature>
	},
	'show' : function(){
		///<signature>
			///<summary>To show the waiting popup</summary>
		///</signature>
	}
});
intellisense.annotate(jQuery.fn, {
	'ejAccordion' : function(){
		///<signature>
			///<summary> The Accordion control is an interface where lists of items can be collapsed or expanded. It has several collapsible panels where only one can be expanded at a time that is useful for dashboards where space is limited. Each Accordion control has a template for its header and its content. </summary>
		///</signature>
	},
	'ejAutocomplete' : function(){
		///<signature>
			///<summary> The AutoComplete control is a textbox control that provides a list of suggestions based on the user query.When the users enters the text in the text box, the control performs a search operation and provides a list of results in the suggestion pop up. There are several filter types available to perform the search. </summary>
		///</signature>
	},
	'ejButton' : function (element){
		///<signature>
			///<summary> Custom Design for Html Button control. </summary>
			///<param name=' options' type='<span class="param-type">object</span>' optional='false' >settings for button</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'ejChart' : function(){
		///<signature>
			///<summary> Essential chart can be easily configured to the DOM element, such as div. You can create a Chart with highly customizable look and feel. </summary>
		///</signature>
	},
	'ejCheckBox' : function(){
		///<signature>
			///<summary> The CheckBox control allows you to check an option to perform an action. This control allows you to select true, false or an intermediate option. These CheckBoxes are supported with themes. The html CheckBox control is rendered as Essential JavaScript CheckBox control. </summary>
		///</signature>
	},
	'ejColorPicker' : function (element){
		///<signature>
			///<summary> The ColorPicker control provides you a rich visual interface for color selection. You can select the color from the professionally designed palettes or custom color. By clicking a point on the color, you can change the active color to the color that is located under the pointer. </summary>
			///<param name=' options' type='<span class="param-type">object</span>' optional='false' >settings for color picker</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'ejDatePicker' : function (element){
		///<signature>
			///<summary> Input field that display the DatePicker calendar as popup to select and set the date value </summary>
			///<param name=' options' type='<span class="param-type">object</span>' optional='false' >settings for Date Picker.</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'ejDateTimePicker' : function (element){
		///<signature>
			///<summary> The DateTimePicker control is used to input the date and time with a specific format. It combines the DatePicker and TimePicker controls so that users can select the date and time with their desired format. </summary>
			///<param name=' options' type='<span class="param-type">object</span>' optional='false' >settings for Date Picker.</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'ejDiagram' : function(){
		///<signature>
			///<summary> The diagram control provides 2D surface to visualize the data as shapes, lines, text and images. It can be configured to DOM element such as DIV. </summary>
		///</signature>
	},
	'ejDialog' : function (element){
		///<signature>
			///<summary> The Dialog control displays a Dialog window within a webpage. The Dialog enables a message to be displayed, such as supplementary content like images and text, and an interactive content like forms. </summary>
			///<param name='responseText' type='<span class="param-type">string</span>' optional='false' ></param>
			///<param name='status' type='<span class="param-type">number</span>' optional='false' ></param>
			///<param name='statusText' type='<span class="param-type">string</span>' optional='false' ></param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'ejDraggable' : function(){
		///<signature>
			///<summary> Plugin to make any DOM element draggable. </summary>
		///</signature>
	},
	'ejDropDownList' : function(){
		///<signature>
			///<summary> The DropDownList control provides a list of options to choose an item from the list. It can including other HTML elements such as images, textboxes, check box, radio buttons, and so on. </summary>
		///</signature>
	},
	'ejDroppable' : function(){
		///<signature>
			///<summary> Plugin to make any DOM element Droppable. </summary>
		///</signature>
	},
	'ejFileExplorer' : function (element){
		///<signature>
			///<summary> FileExplorer provides a Windows Explorer-like functionality for any web application. It allows end-users to browse, select and upload files or change the folder structure by renaming, moving and deleting files or folders. File and folder management capabilities are fully customizable and can be disabled when necessary. </summary>
			///<param name=' options' type='<span class="param-type">object</span>' optional='false' >settings for FileExplorer.</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'ejGantt' : function(){
		///<signature>
			///<summary>. The Essential JavaScript Gantt control is designed to visualize and edit the project schedule, and track the project progress. </summary>
		///</signature>
	},
	'ejGroupButton' : function (element){
		///<signature>
			///<summary> The Essential JavaScript Group Button widget helps to display multiple buttons which are stacked together in a single line and used as a navigation component. Also it manages the checked/unchecked state for a set of buttons, since it supports radio and check button modes. </summary>
			///<param name=' options' type='<span class="param-type">object</span>' optional='false' >Settings for GroupButton</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'ejKanban' : function(){
		///<signature>
			///<summary> The Kanban can be easily configured to the DOM element, such as div. you can create a Kanban with a highly customizable look and feel. </summary>
		///</signature>
	},
	'ejListView' : function(){
		///<signature>
			///<summary> The ListView widget builds interactive ListView interface. This control allows you to select an item from a list-like interface and display a set of data items in different layouts or views. Lists are used for displaying data, data navigation, result lists, and data entry. </summary>
		///</signature>
	},
	'ejMap' : function(){
		///<signature>
			///<summary> The map can be easily configured to the DOM element, such as div and can be created with a highly customized look and feel. </summary>
		///</signature>
	},
	'ejMaskEdit' : function(){
		///<signature>
			///<summary> The MaskEdit control provides an easy and reliable way of collecting user input and displaying standard data in a specific format. Some common uses of the MaskEdit control are IP address editors, phone number editors, and Social Security number editors. </summary>
		///</signature>
	},
	'ejMenu' : function(){
		///<signature>
			///<summary> The Menu control supports displaying a Menu created from list items. The Menu is based on a hierarchy of UL and LI elements where the list items are rendered as sub-menu items. </summary>
		///</signature>
	},
	'ejNavigationDrawer' : function(){
		///<signature>
			///<summary> The Navigation Drawer is a sliding panel that displays the list of navigation options on demand. That is, by default, it is not visible but you can display it onto the left/right side of the screen by swiping or by clicking with desired target icon. </summary>
		///</signature>
	},
	'ejOlapChart' : function(){
		///<signature>
			///<summary> The OlapChart is a lightweight control that reads OLAP information and visualizes it in graphical format with the ability to drill up and down. </summary>
		///</signature>
	},
	'ejPdfViewer' : function(){
		///<signature>
			///<summary> PDF viewer JS is visualization component to view PDF documents. It is powered by HTML5/JavaScript and provides various control customizations. </summary>
		///</signature>
	},
	'ejProgressBar' : function(){
		///<signature>
			///<summary> The ProgressBar control is a graphical control element used to visualize the changing status of an extended operation. </summary>
		///</signature>
	},
	'ejRadioButton' : function(){
		///<signature>
			///<summary> The RadioButton control allows you to choose an option to perform an action. This control allows you to select true/false. </summary>
		///</signature>
	},
	'ejRating' : function(){
		///<signature>
			///<summary> The Rating control provides an intuitive Rating experience that enables you to select a number of stars that represent a Rating. You can configure the item size, orientation and the number of displayed items in the Rating control. You can also customize the Rating star image by using custom CSS. </summary>
		///</signature>
	},
	'ejResizable' : function(){
		///<signature>
			///<summary> Plugin to make any DOM element Resizable. </summary>
		///</signature>
	},
	'ejRibbon' : function(){
		///<signature>
			///<summary> The ribbon can be easily configured to the DOM element, such as div. You can create a ribbon with a highly customizable look and feel. </summary>
		///</signature>
	},
	'ejRotator' : function(){
		///<signature>
			///<summary> The Rotator control displays a set of slides. Each slide may contain images or images with content, or content with user-defined transition between them. </summary>
		///</signature>
	},
	'ejRTE' : function (element){
		///<signature>
			///<summary> Rich text editor is a component that help you to display or edit the content including tables, hyperlinks, paragraphs, lists, video, and images. The editor supports file and folder management using FileExplorer component. </summary>
			///<param name=' options' type='<span class="param-type">object</span>' optional='false' >settings for RTE.</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'ejSchedule' : function(){
		///<signature>
			///<summary> An Event calendar that manages the list of various activities like events/appointments. </summary>
		///</signature>
	},
	'ejScroller' : function(){
		///<signature>
			///<summary> The Scroller control has a sliding document whose position corresponds to a value. The document has text, HTML content or images. You can also customize the Scroller control by resizing the scrolling bar and changing the theme. </summary>
		///</signature>
	},
	'ejSlider' : function(){
		///<signature>
			///<summary> The Slider provides support to select a value from a particular range as well as selects a range value. The Slider has a sliding base on which the handles are moved. There are three types of Sliders such as default Slider, min-range Slider and range Slider. </summary>
		///</signature>
	},
	'ejSplitButton' : function(){
		///<signature>
			///<summary> The Split button allows you to perform an action using clicking the button and choosing extra options from the dropdown button. The Split button also can display both text and images. </summary>
		///</signature>
	},
	'ejSplitter' : function (element){
		///<signature>
			///<summary> The Splitter is a layout control that enables you to divide a Web page into distinct areas by inserting resizable panes. You can create any number of Splitter panes and place them inside the Splitter control. The split bars are inserted automatically in between the adjacent panes. </summary>
			///<param name=' options' type='<span class="param-type">object</span>' optional='false' >settings for Splitter.</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'ejSymbolPalette' : function(){
		///<signature>
			///<summary> The symbol palette control allows to predefine the frequently used nodes and connectors and to drag and drop those nodes/connectors to drawing area </summary>
		///</signature>
	},
	'ejTab' : function(){
		///<signature>
			///<summary> The Tab control is an interface where list of items are expanded from a single item. Each Tab panel defines its header text or header template, as well as a content template. Tab items are dynamically added and removed. Tabs can be loaded with AJAX content that is useful for building dashboards where space is limited. </summary>
		///</signature>
	},
	'ejTagCloud' : function(){
		///<signature>
			///<summary> The TagCloud allows the user to display a list of links or tags with a structured cloud format where the importance of the tags can differentiate with varied font sizes, colors, and styles. </summary>
		///</signature>
	},
	'ejTile' : function(){
		///<signature>
			///<summary> The Web Tiles are simple, opaque rectangles or squares and they are arrayed on the start screen in a grid-like pattern. Tapping or selecting a Tile, launches the app or does some other action that is represented by the Tile. Tiles are arranged in a group separated by columns that looks like a start screen of a device and it can be either static or live. </summary>
		///</signature>
	},
	'ejTimePicker' : function(){
		///<signature>
			///<summary> The TimePicker control for JavaScript allows users to select a time value. The available times can be restricted to a range by setting minimum and maximum time values. The TimePicker sets the time as a mask to prevent users from entering invalid values. </summary>
		///</signature>
	},
	'ejToggleButton' : function(){
		///<signature>
			///<summary> The Toggle Button allows you to perform the toggle option by using checked and unchecked state. This Toggle Button can be helpful to user to check their states. The Toggle Button control displays both text and images. </summary>
		///</signature>
	},
	'ejToolbar' : function(){
		///<signature>
			///<summary> The Toolbar control supports displaying a list of tools within a web page. This control is capable of customizing toolbar items with any functionality by using enriched client-side methods. This control is composed of collection of unordered lists containing text and images contained into a div. </summary>
		///</signature>
	},
	'ejTreeGrid' : function(){
		///<signature>
			///<summary> Custom Design for Html Tree grid control. </summary>
		///</signature>
	},
	'ejTreeView' : function (element){
		///<signature>
			///<summary> The TreeView can be easily configured with the DOM element, such as div or ul. you can create a TreeView with a highly customizable look and feel. </summary>
			///<param name=' options ' type='<span class="param-type">object</span>' optional='false' >settings for TreeView.</param>
			///<returns type ='Syncfusion' />
		///</signature>
	},
	'ejUploadbox' : function(){
		///<signature>
			///<summary> The Uploadbox control supports uploading files into the designated server, regardless of the file format and size. The Uploadbox control helps you with the selection of files to upload to the server. </summary>
		///</signature>
	},
	'ejWaitingPopup' : function(){
		///<signature>
			///<summary> The WaitingPopup control for JavaScript is a visual element that provides support for displaying a pop-up indicator over a target area and preventing the end user’s interaction with the target area while loading. </summary>
		///</signature>
	}
});

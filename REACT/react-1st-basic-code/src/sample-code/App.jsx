// Import the React library
import React from 'react';

// ################################# Working With Paths #############################

// /project
// |-- /src
// |   |-- /folder1
// |   |   |-- yourFile.js
// |   |   |-- yourFile.css
// |   |-- /folder2
// |   |   |-- otherFile.js
// |   |   |-- otherFile.css
// |-- someFile.js
// |-- someFile.css

// // Inside /src/folder1/yourFile.js
// import './yourFile.css'; // Importing a CSS file from the same folder

// // Inside /src/folder1/yourFile.js
// import '../folder2/otherFile.js'; // Importing a JavaScript file from the sibling folder (folder2)
// import '../folder2/otherFile.css'; // Importing a CSS file from the sibling folder (folder2)

// // Inside /src/folder1/yourFile.js
// import '../../someFile.js'; // Importing a JavaScript file from one level up (src)
// import '../../someFile.css'; // Importing a CSS file from one level up (src)

// // Inside /src/folder1/yourFile.js
// import '../../../someFile.js'; // Importing a JavaScript file from two levels up (project)
// import '../../../someFile.css'; // Importing a CSS file from two levels up (project)

// ####################################################################################

// ################################# Sample Basic React Structure #############################

// my-react-app/
// |-- public/
// |   |-- index.html
// |   |-- favicon.ico
// |-- src/
// |   |-- components/
// |   |   |-- App.js
// |   |   |-- Header.js
// |   |   |-- Footer.js
// |   |-- pages/
// |   |   |-- Home.js
// |   |   |-- About.js
// |   |   |-- Contact.js
// |   |-- assets/
// |   |   |-- images/
// |   |   |   |-- logo.png
// |   |-- styles/
// |   |   |-- App.css
// |   |   |-- Header.css
// |   |   |-- Footer.css
// |-- package.json
// |-- package-lock.json
// |-- README.md
// |-- .gitignore
// |-- node_modules/

// ####################################################################################

// Import contactInfo from the specified path
import contactInfo from './data/02-contancts-info';
// Import components from specified paths
import HeaderText, { SampleAppTime, SomeExpression } from './01-basic-react-component/01-basic-react-component';
// Import the stylesheet for this component
import "./App.css";
// Import the Card component
import Card from './02-react-component-properties-PROPS/02-react-component-properties-PROPS';

import NumberActions from './03-map-filter-reduce-filter-filterIndex/03-map-filter-reduce-filter-filterIndex';
import LogInPlease from './04-rendering-with-ternary-operator/04-rendering-with-ternary-operator';
import LiveTimer from './05-useState-hook/01-liveTimer-useState';
import UseStateSample from './05-useState-hook/05-useState';
import DestructureObejct from './06-destructure-array-and-object/06-destructure-array-and-object';
import EventHandlingSample from './07-event-handling-sample/07-event-handling';
import EventHandlingFormsSample from './08-event-handling-forms-sample/08-event-handling-forms-sample';
import EventHandlingFormsSample2 from './09-event-handling-forms-sample-2/09-event-handling-forms-sample-2';
import EventHandlingFormsSample3 from './10-event-handling-forms-sample-3-spread/10-event-handling-forms-sample-3-spread';
import MaterialUiSample from './11-react-material-ui/11-react-material-ui';
import UseEffectSample from './05-useEffect-hook/05-useEffect-fetch-data';
import UseEffectSample2 from './05-useEffect-hook/05-useEffect-window-width';
import UseMemoSample from './05-useMemo-hook/useMemo';



// Define a style object for the line
const lineStyle = {
    width: "100%",
    textAlign: "center",
    borderBottom: "1px solid black"
};

// Define the main App component
const App = () => {
    return (
        <div>
            {/* 01-basic-react-component */}
            <div>
                <HeaderText />
            </div>

            {/* Line break for styling */}
            <p style={lineStyle}></p>

            <div>
                <SomeExpression />
            </div>

            <p style={lineStyle}></p>

            <div>
                <SampleAppTime />
            </div>
            {/*  */}

            <p style={lineStyle}></p>

            {/* 02-react-component-properties-PROPS */}
            <div className="card-container">
                {/* Map through contactInfo to generate Card components */}
                {contactInfo.map((contact) => (
                    <Card
                        key={contact.id} // Adding a unique key for each Card
                        name={contact.name}
                        image={contact.image}
                        phone={contact.phone}
                    />
                ))}
            </div>
            {/*  */}

            <p style={lineStyle}></p>

            {/* 03-map-filter-reduce-filter-filterIndex */}
            <div>
                <NumberActions />
            </div>
            {/*  */}

            <p style={lineStyle}></p>

            {/* 04-rendering-with-ternary-operator */}
            <div>
                <LogInPlease />
            </div>
            {/*  */}

            <p style={lineStyle}></p>

            {/* 05-useState */}
            <div>
                <UseStateSample />
                <LiveTimer />
            </div>
            {/*  */}

            <p style={lineStyle}></p>

            {/* 05-useeffect */}
            <div>
                <UseEffectSample />
                <UseEffectSample2 />
                <UseMemoSample />
            </div>
            {/*  */}

            <p style={lineStyle}></p>

            {/* 06-destructure-array-and-object */}
            <div>
                <DestructureObejct />
            </div>
            {/*  */}

            <p style={lineStyle}></p>

            {/* 07-event-handling-sample */}
            <div>
                <EventHandlingSample />
            </div>
            {/*  */}

            <p style={lineStyle}></p>

            {/* 08-event-handling-forms-sample */}
            <div>
                <EventHandlingFormsSample />
            </div>
            {/*  */}

            <p style={lineStyle}></p>

            {/* 09-event-handling-forms-sample-2 */}
            <div>
                <EventHandlingFormsSample2 />
            </div>
            {/*  */}

            <p style={lineStyle}></p>

            {/* 10-event-handling-forms-sample-3-spread */}
            <div>
                <EventHandlingFormsSample3 />
            </div>
            {/*  */}

            <p style={lineStyle}></p>

            <div>
                <MaterialUiSample />
            </div>

        </div>
    );
};

export default App; // Exporting the App component as the default export
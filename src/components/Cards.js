import Card from "./Card";

function Cards() {

    let frontEndCapabilities = ['Building user interfaces from scratch.', 'Using a state management solution - Redux.', 'Experience in building complex UI systems with huge scale of data.'];
    let frontEndTools = ['React.js', 'React Hooks', 'Redux.js', 'Bootstrap', 'Material UI'];

    let backEndCapabilities = ['Building a scaleable server-side from scratch. (Router, Business-Logic, Data Access Layer, Working with different DataTypes)', 'Applying Security and Authentication using JWT', 'Working with multiple thread/processes'];
    let backEndTools = ['Node.js', 'Express.js', 'Express Router', 'JWT', 'Python', 'Sub-Processes', 'Java', 'Multi-Threaded Programming'];

    let networkingCapabilities = ['Able to isolate a networking problem to specific place and solve it', 'PCAP and the understanding of where to take it from.', 'Logs reading, analyzing'];
    let networkingTools = ['Python', 'Wireshark', 'Regex', 'Firewall Management', 'VPN', 'Troubleshoot networking issues'];

    let machineLearningCapabilities = ['Visualization', 'Pre-Processing - Spliting the data(train-test), Train the data, Scale the data', 'Building LSTM model', 'Sentiment Analysis'];
    let machineLearningTools = ['Python', 'Numpy', 'SKLearn', 'Keras', 'VPN', 'textblob'];

    return (

        <div id='cards-conatiner'>

            <div id='cards'>

                <Card title={'Front-End Developer'} capabilities={frontEndCapabilities} tools={frontEndTools} />
                <Card title={'Back-End Developer'} capabilities={backEndCapabilities} tools={backEndTools} />
                <Card title={'Networking'} capabilities={networkingCapabilities} tools={networkingTools} />
                <Card title={'Machine-Learning'} capabilities={machineLearningCapabilities} tools={machineLearningTools} />

            </div>

        </div>
    )
}

export default Cards;
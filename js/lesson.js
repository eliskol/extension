const pathname = window.location.pathname;
const parts = pathname.split('/');

const taskId = parseInt(parts[2]);
const topicId = parseInt(parts[4]);

const fetchPrerequisites = async () => {
    const prereqRequest = await fetch(`${window.location.origin}/api/topics/${topicId}/prerequisites`);
    const prereqJSON = await prereqRequest.json();
    return await prereqJSON['prerequisites'];
}


const createPrerequisiteDisplay = (prerequisiteJSON) => {
    const questionRow = document.querySelector('div#steps').parentElement.parentElement;
    const questionTd = document.querySelector('div#steps').parentElement;

    const progressRow = document.querySelector('div#progressBar').parentElement.parentElement;

    const td = document.createElement('td');

    const prerequisiteFrame = document.createElement('div');
    const prerequisiteHeader = document.createElement('div');

    prerequisiteFrame.id = 'prerequisiteFrame';

    prerequisiteHeader.id = 'prerequisiteHeader';
    prerequisiteHeader.innerText = 'Prerequisites';
    prerequisiteFrame.appendChild(prerequisiteHeader);

    td.classList.add('augmentation');

    prerequisiteJSON.forEach(prerequisite => {
        const prerequisiteDiv = document.createElement('div');
        const prerequisiteLink = document.createElement('a');

        prerequisiteDiv.classList.add('prerequisite');

        prerequisiteLink.href = `${window.location.origin}/topics/${prerequisite.id}`;
        prerequisiteLink.innerText = prerequisite.name;

        prerequisiteDiv.appendChild(prerequisiteLink);
        prerequisiteFrame.appendChild(prerequisiteDiv);
    });


    const dummyTd = document.createElement('td');
    const secondDummyTd = document.createElement('td');
    progressRow.insertBefore(dummyTd, progressRow.firstElementChild);

    td.appendChild(prerequisiteFrame);
    questionRow.insertBefore(td, questionRow.firstElementChild);
    secondDummyTd.style.width = '359px';
    questionRow.appendChild(secondDummyTd);
}

chrome.storage.local.get({'toggle': true}, (result) => {
    if (result['toggle']) {
        fetchPrerequisites().then(json => {
            createPrerequisiteDisplay(json);
        });
    }
});
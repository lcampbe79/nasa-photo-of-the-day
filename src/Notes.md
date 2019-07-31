setData(response.data) is thehook state, saves the data from the console.log(response)


<Card 
    copyright={data.copyright}
    title={data.title}
    img={data.url}
    explanation={data.explanation}
/> -- this is returning the data that I saved in the setData variable. I am able to pass the properties that are saved in setData to create the elements (<h1>, <h3>, etc) by naming them the way I want (.copyright) and when I go bck to App.js I give the Card the actual place to get the data from. data.copyright is pulling the information down from response.data.
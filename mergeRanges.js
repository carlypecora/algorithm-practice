// Write a function mergeRanges() that takes an array of multiple meeting time ranges and returns an array of condensed ranges.

// For example, given:

//   [
//   { startTime: 0,  endTime: 1 },
//   { startTime: 3,  endTime: 5 },
//   { startTime: 4,  endTime: 8 },
//   { startTime: 10, endTime: 12 },
//   { startTime: 9,  endTime: 10 },
// ]

// your function would return:

//   [
//   { startTime: 0, endTime: 1 },
//   { startTime: 3, endTime: 8 },
//   { startTime: 9, endTime: 12 },
// ]

// Do not assume the meetings are in order. The meeting times are coming from multiple teams.

function mergeRanges(meetings) {
  //sort meetings by start 
  const sortedMeetings = meetings.sort((a,b) => {
    return a.startTime - b.startTime
  })
  // console.log(sortedMeetings)

  // Initialize mergedMeetings with the earliest meeting
  const mergedMeetings = [sortedMeetings[0]]
 
  for (let i = 0; i < sortedMeetings.length; i++){
    let currentMeeting = sortedMeetings[i]
    let lastMergedMeeting = mergedMeetings[mergedMeetings.length - 1]
     // If the current meeting overlaps with the last merged meeting, use the
    // later end time of the two
    if (currentMeeting.startTime <= lastMergedMeeting.endTime) {
      lastMergedMeeting.endTime = Math.max(lastMergedMeeting.endTime, currentMeeting.endTime);
    } else {

      // Add the current meeting since it doesn't overlap
      mergedMeetings.push(currentMeeting)
    }
  }
  console.log(mergedMeetings)
  return mergedMeetings
}

mergeRanges([
  { startTime: 0,  endTime: 1 },
  { startTime: 3,  endTime: 5 },
  { startTime: 4,  endTime: 8 },
  { startTime: 10, endTime: 12 },
  { startTime: 9,  endTime: 10 },
])
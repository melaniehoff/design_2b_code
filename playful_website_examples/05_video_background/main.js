
$(document).ready(function() {

  var videoID = 'video_tag';
  var sourceID = 'video_source';
  var vid_array = ["vid_2.mp4","vid_3.mp4","vid_4.mp4","vid_5.mp4","vid_6.mp4"];
  var i = 0
  var new_vid = vid_array[i];

  $('#video_link').click(function(event) {
    $('#'+videoID).get(0).pause();
    $('#'+sourceID).attr('src', new_vid);
    $('#'+videoID).get(0).load();
    i += 1;
    new_vid = vid_array[i];
    console.log(i)
    console.log(new_vid);
  });
  
});

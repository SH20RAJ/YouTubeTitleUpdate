
/* This Script is Provided By CXDI - ToolAde 
* Site :- https://codexdindia.blogspot.com/
* YoTube :- https://codexdindia.blogspot.com/youtube or https://www.youtube.com/channel/UCFPFrVOaeG3q1PEzpeh7hCg 
* Instagram :- https://bit.ly/cxdi-insta
*/
function updateTitle() {
  
  var videoID = '<< Video ID >>'; // If https://www.youtube.com/watch?v=4LCV2_Dz7j8 Then 4LCV2_Dz7j8 is Your Video ID
  var part = 'snippet,statistics';
  var params = {'id': videoID};
  
  var response = YouTube.Videos.list(part, params);
  var video = response.items[0];
  var videoViewsCount = video.statistics.viewCount;
  var videoLikeCount = video.statistics.likeCount;
  var videoTitle = 'This Video has ' + videoViewsCount + ' Views & ' + videoLikeCount + ' Likes | YouTube Automatic Title Update - Share ASAP ';
  
  video.snippet.title = videoTitle;
  
  try{
    YouTube.Videos.update(video, part);
    
  }catch(e){
    
  
  }
  
}


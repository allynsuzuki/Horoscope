
function doDays(month){
    month=parseInt(month);
    var mDays = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    var result = "";
    for(var i = 1; i<=mDays[month];i++){
        result += "<option value=" + i + ">" + i + "</option>"
    }
    document.getElementById("days").innerHTML = result;
}

var horoscope=["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn",
    "Aquarius", "Pisces"];

function determineSign() {
    var month = document.getElementById("month").value;
    var day = document.getElementById("days").value;
    var name = document.getElementById("name").value;
    var sign = "";
    var scope = "";

    if (month == 3 && day >= 20 || month == 4 && day <= 19) {
        sign = horoscope[0];
        scope = "If anyone decides that it might be fun to see just how far you can be pushed, they are in for a " +
            "serious lesson. At this point, you're not willing to go very far at all. If people came with warning labels " +
            "(how did that get skipped?), yours would say 'Danger -- Do not exceed capacity.' Of course, with your fiery " +
            "energy, this situation isn't exactly rare, so the next best thing is to shut all doors as soon as you can."
    }
    if (month == 4 && day >= 20 || month == 5 && day <= 20) {
        sign = horoscope[1];
        scope = "Making a new friend isn't easy for anyone, especially if we enjoy privacy, as you certainly do. You " +
            "may be feeling even more secretive at the moment, however, so if you decide to let someone in on your " +
            "feelings and plans and how you've reached this point, they need to understand just how special that makes " +
            "them. If they didn't, though, you probably wouldn't have let them get this close to begin with!"
    }
    if (month == 5 && day >= 21 || month == 6 && day <= 20) {
        sign = horoscope[2];
        scope = "You know well how wonderful it is to have entertaining friends. You've spent plenty of time assembling " +
            "just such a crew, and you take their affection seriously. You don't just invite any old person into that " +
            "circle without considering what they're likely to add to it, or how your current friends might take to " +
            "them. If you're ready to open the books, be sure that someone lets this fortunate newcomer know just " +
            "how special the invitation is."
    }
    if (month == 6 && day >= 21 || month == 7 && day <= 22) {
        sign = horoscope[3];
        scope = "You've always had a decent relationship with your bosses, teachers and other authority figures. In " +
            "fact, they have often treated you as an equal. That's exactly how you feel now when higher-ups actually " +
            "come to you for advice. If you hear gossip, try not to get too stressed about it. Everyone needs someone " +
            "else to talk about!"
    }
    if (month == 7 && day >= 23 || month == 8 && day <= 22) {
        sign = horoscope[4];
        scope = "Your friends live by one simple rule: When you're happy, everyone's happy. Your fiery nature just " +
            "doesn't allow anyone to be depressed in your immediate vicinity -- unless you're feeling down yourself! " +
            "At the moment, you're feeling pretty great, which means you do your very best to make everyone around " +
            "you as happy as they can be. It's a great way to celebrate that well-deserved streak of luck you're " +
            "currently enjoying!"
    }
    if (month == 8 && day >= 23 || month == 9 && day <= 22) {
        sign = horoscope[5];
        scope = "If you're not sure quite how you should handle a certain situation that's a little too delicate " +
            "for prime time, then hold off on mentioning it to anyone, at least for the time being. You know perfectly " +
            "well that there are still interlocking issues to be resolved, and until then, silence is the best strategy. " +
            "You're in charge, and you know it -- so call a meeting if you must, just to be sure that everyone is on " +
            "the same page."
    }
    if (month == 9 && day >= 23 || month == 10 && day <= 22) {
        sign = horoscope[6];
        scope = "Relationships are almost always your number one priority, but at the moment, nothing else can even " +
            "come close! Your lucky partner -- or prospective partner, or even your latest crush -- should enjoy all " +
            "kinds of sweet attention, aimed simply at ensuring that they know how deeply and securely you care for " +
            "them. You expect your feelings to be returned, but it's still vital to have the conversation anyway."
    }
    if (month == 10 && day >= 23 || month == 11 && day <= 21) {
        sign = horoscope[7];
        scope = "You know how to make awesome plans and see them through to the end, never even thinking about " +
            "aborting the mission. You're a planner and a plotter, containing equal parts detective and analyst. " +
            "Today's plan is just about perfect from beginning to end -- so much so that you should be confident " +
            "about sharing it with anyone, even rivals. If it involves helping a loved one out of a tough spot, " +
            "don't lose sight of your own needs in the process."
    }
    if (month == 11 && day >= 22 || month == 12 && day <= 21) {
        sign = horoscope[8];
        scope = "Generosity and excess are dangerous qualities to tote around in tandem, and it takes a very special " +
            "kind of person to pull it off. For the most part, you're up for the challenge, and pretty happy about it, " +
            "too! Still, you really need to make sure that everyone appreciates what you're doing for them, and that " +
            "they don't just take you for granted. You should also take a little time for yourself now, just because " +
            "you can."
    }
    if (month == 12 && day >= 23 || month == 1 && day <= 19) {
        sign = horoscope[9];
        scope = "No matter what the subject or where you happen to be, you are rarely shy about expressing an opinion. " +
            "You're not exactly shy now either, but you may start to feel a bit of unusual emotional interference " +
            "coming on, so remind yourself that if anyone has the right to be confident, it's you. You've been so " +
            "diligent and hardworking for so long, so relax. Let the rest of the world worry about your feelings for " +
            "a change!"
    }
    if (month == 1 && day >= 20 || month == 2 && day <= 17) {
        sign = horoscope[10];
        scope = "If you're worried that you might say or do something to offend someone, especially if you know what's " +
            "coming, take a friend along for the ride who's wellequipped to mediate when necessary. You know who you " +
            "need to ask -- because you've probably had to call on them in the past! Remember, though, that it's not " +
            "you who they're watching out for -- it's anyone who gets in your way or challenges your opinions."
    }
    if (month == 2 && day >= 18 || month == 3 && day <= 19) {
        sign = horoscope[11];
        scope = "You may not be in the mood for shopping at the moment, but that doesn't mean there isn't something " +
            "out there that's so appealing that you don't go to any extremes to have it delivered to your door within " +
            "24 hours. If you're not sure you can afford it, call the one wisest person you know who can talk you out " +
            "of it without making you feel like you're cheating yourself."
    }
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;

    if (name==""){
        document.getElementById("output").innerHTML = "Name invalid, please type a name and re enter your birthday.";
        document.getElementById("output2").innerHTML = "";
        document.getElementById("image").innerHTML = "";
    }else {
        if(day==dd && month==mm) {
            document.getElementById("output").innerHTML = "It's your birthday!! Happy Birthday! You are a " + sign + "!";
            document.getElementById("output2").innerHTML = name + ", this is your horoscope for the day: " + scope;
            if (sign == horoscope[0] || sign == horoscope[4] || sign == horoscope[5] || sign == horoscope[6] || sign ==
                horoscope[10]) {
                document.getElementById("image").innerHTML = '<img src="img/' + sign + '.jpg">';
            } else {
                document.getElementById("image").innerHTML = '<img src="img/' + sign + '.png">';
            }
        }else{
            document.getElementById("output").innerHTML = "You are a " + sign + "!";
            document.getElementById("output2").innerHTML = name + ", this is your horoscope for the day: " + scope;
            if (sign == horoscope[0] || sign == horoscope[4] || sign == horoscope[5] || sign == horoscope[6] || sign ==
                horoscope[10]) {
                document.getElementById("image").innerHTML = '<img src="img/' + sign + '.jpg">';
            } else {
                document.getElementById("image").innerHTML = '<img src="img/' + sign + '.png">';
            }
        }
    }
}















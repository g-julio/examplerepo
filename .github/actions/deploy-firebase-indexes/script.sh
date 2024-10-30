#!/usr/bin/expect

set project [lindex $argv 0]
set path [lindex $argv 1]

cd $path

spawn firebase deploy --project=$project --only firestore:indexes
expect {
    "Would you like to delete these indexes? Selecting no will continue the rest of the deployment" {
        send "N\r"
        interact
    }
}

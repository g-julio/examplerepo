#!/usr/bin/expect

set project [lindex $argv 0]
set path [lindex $argv 1]

cd $path

spawn firebase deploy --project=$project --only firestore:indexes

proc wait_for_deployment {attempts} {
    set timeout 10  ;# Timeout for waiting for deletion confirmation
    if {$attempts <= 0} {
        puts "Error: Timed out waiting for deployment confirmation."
        exit 1
    }
    expect {
        "Would you like to delete" {
            send "N\r"
            interact
        }
        "Deploy complete!" {
            puts "Deployment completed successfully."
            exit 0
        }
        timeout {
            wait_for_deployment [expr {$attempts - 1}]
        }
    }
}

wait_for_deployment 10  ;# Allow up to 10 attempts

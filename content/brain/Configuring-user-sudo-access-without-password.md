---
title: "Configuring user sudo access without password"
category: Computers-Servers
id: ca3bd14879974c91a7961718d9259eb1
parent_id: 4cf021fece7341fe8684a3dab62782a7
created_at: 1596429767993
---

08/03/2020

https://www.reddit.com/r/linuxquestions/comments/4n4l2s/how_to_use_systemctl_on_ubuntu_over_ssh_from_an/
https://askubuntu.com/questions/192050/how-to-run-sudo-command-with-no-password/443071#443071


## How to run sudo command with no password?

I found that the most straight forward thing to do, in order to easily replicate this behavior across multiple servers, was the following:

sudo visudo

Change this line:

# Members of the admin group may gain root privileges
%admin  ALL=(ALL) ALL

to this line:

# Members of the admin group may gain root privileges
%admin  ALL=(ALL) NOPASSWD:ALL

And move it under this line:

# Allow members of group sudo to execute any command
%sudo   ALL=(ALL:ALL) ALL

you should now have this:

# This file MUST be edited with the 'visudo' command as root.
#
# Please consider adding local content in /etc/sudoers.d/ instead of
# directly modifying this file.
#
# See the man page for details on how to write a sudoers file.
#

Defaults        env_reset
Defaults        mail_badpass
Defaults        secure_path="/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin"

# Host alias specification

# User alias specification

# Cmnd alias specification

# User privilege specification
root    ALL=(ALL:ALL) ALL

# Allow members of group sudo to execute any command
%sudo   ALL=(ALL:ALL) ALL

# Members of the admin group may gain root privileges
%admin  ALL=(ALL) NOPASSWD:ALL

# See sudoers(5) for more information on "#include" directives:

#includedir /etc/sudoers.d

then for every user that needs sudo access WITH a password:

sudo adduser <\user> sudo

and for every user that needs sudo access WITH NO password:

sudo adduser <\user> admin

and finally, run this:

sudo service sudo restart

And that's it!
    
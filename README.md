Tweet Signer:
=============

What is it?
------------

A way for you to cryptographically sign tweets, and for others to verify it.

Signed and verified Tweets ✌

Spec:
-----

* Add a link to your profile bio ending with '.keys' which should be a valid
  public key.

* In case .keys contains multiple keys, the first key will be used.

* A tweet which needs verification must contain exactly image attachment which
  should be the signature of the tweet as a QR code.

* The signature must be verifiable against the tweet using the public key from
  the profile.

Why does this exist?
----------------------

"Not Your Keys, Not Your Coin" is a oft-repeated adage. 
Exchanges get hacked - but nobody thought Twitter would get hacked, until they did. 

You need to be abale to sign your tweets, so even if Twitter gets hacked again, people can verify that the tweet did not come from you.    

How does it work?
--------------------

- You install our chrome extension.
- You store your private key in the chrome extension. The private key is only stored locally.
- You write the tweet in the chrome extension
- The extension generates the signature and the QR code for the signature
- You view and downloads the QR code
- You attach the QR code to the tweet. Your tweet is now signed. Anyone can verify the sanctitu of your tweet. Even if twitter get compromised, nobody can tweet on your behalf.

To verify
-------------



Usage:
======

Add public key to your profile.

Users will see :✅: if your tweet is signed!

LICENSE:
========

MIT

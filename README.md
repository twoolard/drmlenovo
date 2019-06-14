# Lenovo Digital Roadmap Proof of Concept

This is a proof of concept implementation for the Digital Road Map Interactive Tool to be built for Lenovo management utilizing the designs of Amanda Michelson.

The proof of concept is a basic design rendered with basic image assets, basic HTML, basic CSS and basic JavaScript.

A production grade design will implement a suite of enhancements including incorporating a MongoDB NoSQL database, GraphQL API design, the extended Reactjs library, JIRA request/bug/feedback integration and many other feature enhancing frameworks and libraries. The improved product's architecture will be constructed in Nodejs and the language utilized will be TypeScript.

Temporarily published at: https://parallelam.github.io/drmlenovo/

TODO:

(1) Fix reload bug: Currently page refresh is providing 404 instead of redirecting to demo page at [host]/admin/[route]

(2) Possibly redesign appbar + drawer rendering - as they become a little too scrunched at smaller resolutions when both items are opened. No functionality is lost, but design implementation could be better (possible solution: Autocollapse one when the other is opened at <XYZ resolution).

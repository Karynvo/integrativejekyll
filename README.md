# Integrative Dentistry

A website made using Jekyll site generator and Bootstrap 4.3 styling

## Installation

First be sure that you have [Ruby](https://www.ruby-lang.org/en/) installed. You can check by doing

```bash
ruby -v
```
If you don't have it, install it.

Next make sure you have [Jekyll](https://jekyllrb.com/docs/) installed. 

```bash
jekyll -v
```

If you don't, run this:

```bash
gem install jekyll bundler
```

This should install all dependencies defined in the Gemfile

## Usage

To run the site locally on localhost:4000,
```bash
bundle exec jekyll serve
```

## Deployment

### Development

A [development environment](http://www.mitchmarderdds-dev.com.s3-website.us-west-2.amazonaws.com/) in s3 exists. You can deploy to the dev environment by building the site

```bash
jekyll build
```

This will generate the static output of the site in the _site folder. Next, deploy to the dev bucket

```bash
aws s3 sync _site s3://www.mitchmarderdds-dev.com --delete
```

### Production

Any push or merge to the master branch will deploy to prod in AWS S3 and to the CloudFront distribution (~24h propagation)

## Structure

### Content
- Doctors
- Reviews
- Services
- About Us
- Blog

The project has a directory for each one of these collections. Static content is stored in markdown files. Each markdown file contains the layout that is used (from the _layout directory), the title, the permalink, and extra metadata.

The blog section has additional metadata regarding blog posts that was ported over from the WordPress blog. Additional blog post metadata can be found on the WordPress site if needed.

### Layout
- Layout
- Includes

Mix of liquid and HTML in HTML files that define the layout of various parts of the website.

## Assets
Custom styling is lumped into one CSS file called index.css. There is some inline styling that exists throughout the site (sorry!). All JavaScript in lumped into one JS file called index.js. Both of these are included on every page in _layout/default.html

[Bootstrap 4.3](https://getbootstrap.com/docs/4.3/getting-started/introduction/) is used for the CSS library
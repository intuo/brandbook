set :css_dir, "stylesheets"
set :js_dir, "javascripts"
set :images_dir, "images"
set :relative_links, true

sprockets.append_path File.join root, "vendor/assets/bower"
sprockets.import_asset "jquery/dist/jquery.js"
sprockets.import_asset "bootstrap/dist/css/bootstrap.css"
sprockets.import_asset "jquery/dist/jquery.js"

configure :build do
  activate :minify_css
  activate :minify_javascript
  activate :relative_assets
end

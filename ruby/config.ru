require './ruby_sinatra'
require 'rack/contrib'

use Rack::PostBodyContentTypeParser

run ruby_sinatra
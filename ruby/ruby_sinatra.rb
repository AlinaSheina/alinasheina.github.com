require 'sinatra'
require 'sinatra/param'
require 'mongoid'

require 'sinatra-initializers'

get '/new-img' do
	param :url,   String, required: true
	param :task,  String, required: true

	clientItem = ClientItem.create! params

	clientItem = ClientItem.new
	clientItem.url = params['url']
	clientItem.task = params['task']
	clientItem.save
end

class ClientItem 
	include Mongoid::Document

	field :url, type: String
	field :task, type: String
end

Mongoid.load!('mongoid.yml')
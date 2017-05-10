
# coding: utf-8

# In[201]:

import numpy
import scipy.special
import matplotlib.pyplot
get_ipython().magic('matplotlib inline')


# In[202]:

#neural network class definition
class neuralNetwork:
    
    #initialization
    def __init__(self, inputnodes, hiddennodes, outputnodes, learningrate):
        #set number of nodes in input, hidden, and output layers
        self.inodes = inputnodes
        self.hnodes = hiddennodes
        self.onodes = outputnodes
        
        #link weight matrices, wih and who
        #weights inside the arrays are w_i_j, where link is from node i to node j in the next layer
        #w11 w21
        #w12 w22 etc
        self.wih = numpy.random.normal(0.0, pow(self.hnodes, -0.5), (self.hnodes, self.inodes))
        self.who = numpy.random.normal(0.0, pow(self.onodes, -0.5), (self.onodes, self.hnodes))

        #learning rate
        self.lr = learningrate
            
        #activation function is the sigmoid function
        self.activation_function = lambda x: scipy.special.expit(x)
        self.inverse_activation_function = lambda x: scipy.special.logit(x)
            
        pass
    
    #training
    def train(self, inputs_list, targets_list):
        #convert inputs list into 2d array
        inputs = numpy.array(inputs_list, ndmin=2).T
        targets = numpy.array(targets_list, ndmin=2).T
        #inputs = inputs_list
        #targets = targets_list
        
        #calculate the signals into the hidden layer
        hidden_inputs = numpy.dot(self.wih, inputs)
        #calculate the signals emerging from the hidden layer
        hidden_outputs = self.activation_function(hidden_inputs)
        
        #calculate the signals into the final output layer
        final_inputs = numpy.dot(self.who, hidden_outputs)
        #calculate the signals emerging from the final output layer
        final_outputs = self.activation_function(final_inputs)

        #error is (target-actual)
        output_errors = targets - final_outputs
        
        #hidden layer error is the output_errors, split by weights, recombined at hidden nodes
        hidden_errors = numpy.dot(self.who.T, output_errors)
        
        #update the weights for the links between the hidden and output layers
        self.who += self.lr * numpy.dot((output_errors * final_outputs * (1.0 - final_outputs)), numpy.transpose(hidden_outputs))

        #update the weights for the links between the hidden and output layers
        self.wih += self.lr * numpy.dot((hidden_errors * hidden_outputs * (1.0 - hidden_outputs)), numpy.transpose(inputs))
        
        pass
    
    #query
    def query(self, inputs_list):
        #convert inputs list into 2d array
        inputs = numpy.array(inputs_list,ndmin=2).T
        
        #calculate the signals into the hidden layer
        hidden_inputs = numpy.dot(self.wih, inputs)
        #calculate the signals emerging from the hidden layer
        hidden_outputs = self.activation_function(hidden_inputs)
        
        #calculate the signals into the final output layer
        final_inputs = numpy.dot(self.who, hidden_outputs)
        #calculate the signals emerging from the final output layer
        final_outputs = self.activation_function(final_inputs)
        
        return final_outputs
        
    def backquery(self, targets_list):
        #convert inputs list into 2d array
        final_outputs = numpy.array(targets_list,ndmin=2).T
        
        #calculate the signal into the final layer
        final_inputs = self.inverse_activation_function(final_outputs)
        
        #calculate the signal out of the hidden layer
        hidden_outputs = numpy.dot(self.who.T, final_inputs)
        # scale them back to 0.01 to .99
        hidden_outputs -= numpy.min(hidden_outputs)
        hidden_outputs /= numpy.max(hidden_outputs)
        hidden_outputs *= 0.98
        hidden_outputs += 0.01
        
        #calculate the signal into the hidden layer
        hidden_inputs = self.inverse_activation_function(hidden_outputs)
        
        #calculate the signal out of the input layer
        inputs = numpy.dot(self.wih.T, hidden_inputs)
        inputs -= numpy.min(inputs)
        inputs /= numpy.max(inputs)
        inputs *= 0.98
        inputs += 0.01
        
        return inputs    


# In[203]:

#number of input, hidden and output nodes
input_nodes = 784
hidden_nodes = 50
output_nodes = 10

#learning raet
learning_rate = 0.2

#create the instance
n = neuralNetwork(input_nodes, hidden_nodes, output_nodes, learning_rate)


# In[204]:

#load the data set
training_data_file = open ("mnist_train.csv", 'r')
training_data_list = training_data_file.readlines()
training_data_file.close()

#train the network
epochs = 2

for e in range(epochs):
    for record in training_data_list:
        all_values = record.split(',')
        inputs = (numpy.asfarray(all_values[1:])/ 255.0 * 0.99) + 0.01
        targets = numpy.zeros(output_nodes) + 0.01
        #all_values[0] is the target label for this record
        targets[int(all_values[0])] = 0.99
        n.train(inputs, targets)
        pass
    pass


# In[205]:

#load the mnist test data CSV file into a list
test_data_file = open("mnist_test.csv" , 'r')
test_data_list = test_data_file.readlines()
test_data_file.close()


# In[206]:

#test the neural network

#scorecard for how the network performs
scorecard = []

#go through all the records in the test set
for record in test_data_list:
    all_values = record.split(',')
    #get the correct answer
    correct_label = int(all_values[0])
    print(correct_label, "correct label")
    #scale and shift the inputs
    inputs = (numpy.asfarray(all_values[1:])/255.0 * 0.99) + 0.01
    #query the network
    outputs = n.query(inputs)
    #the index of the highest value corresponds to the label
    label = numpy.argmax(outputs)
    print(label, "network's answer")
    #append incorrect or correct to the list
    if (label == correct_label):
        scorecard.append(1)
    else:
        scorecard.append(0)
        pass
    pass


# In[207]:

print(scorecard)


# In[208]:

#calculate the performance score, the fraction of correct answers
scorecard_array = numpy.asarray(scorecard)
print("performance = " , scorecard_array.sum() / scorecard_array.size)


# In[214]:

#run the network backwards

#the label to test
label = 9
#create the targets
targets = numpy.zeros(output_nodes) + 0.01
#turn on the target index
targets[label] = 0.99

image_data = n.backquery(targets)

# plot image data
matplotlib.pyplot.imshow(image_data.reshape(28,28), cmap='Greys', interpolation='None')


# In[ ]:




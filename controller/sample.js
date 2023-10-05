const catcherror = require("../Middleware/catcherror");
const Text = require("../Model/SampleModel")


exports.updateText = catcherror(async(req,res,next)=>{
    const data = req.body
      const newtext = await Text.findByIdAndUpdate(req.params.Id,data,{
        new: true,
        runValidators: true,
        useFindAndModify: false,
      })
      res.status(201).json({
        success:true,
        newtext
      })
  })
  
  
  exports.createSample = catcherror(async(req,res,next)=>{
    const data = req.body
    const added = await Text.create(data);
      res.status(201).json({
        success:true,
        added
      })
  })
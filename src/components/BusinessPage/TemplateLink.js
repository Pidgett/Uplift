import React, { Fragment, useState, memo } from "react";

const TemplateLink = (props) => {
  app.put("/businesses/:id", async (req, res) => {
    try {
      const { id } = req.params;
    } catch (error) {
      console.error(error.message);
    }
  });

  return <Fragment>{props.id}</Fragment>;
};

export default TemplateLink;

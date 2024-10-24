using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;

[TestClass]
public class SolutionTests
{
    private Solution _solution;

    [TestInitialize]
    public void Setup()
    {
        _solution = new Solution();
    }

    [TestMethod]
    public void Solution_WhenInstantiated_ShouldNotBeNull()
    {
        Assert.IsNotNull(_solution);
    }

    [TestMethod]
    public void Solution_WhenCreated_ShouldBeOfTypeSolution()
    {
        Assert.IsInstanceOfType(_solution, typeof(Solution));
    }
}
